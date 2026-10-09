import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

test("pending facts resolve to nothing and confirmed facts stay", async () => {
  const { publicValue } = await import("../src/lib/facts.ts");
  const { activeLocale, homeSections, locations, recognition, topTen } =
    await import("../src/content/index.ts");
  const index = readFileSync(join(root, "src/content/index.ts"), "utf8");

  assert.equal(activeLocale, "zh-HK");
  assert.doesNotMatch(index, /zh-CN|zh-Hans|from "\.\/en/);

  assert.deepEqual(
    homeSections.map((section) => section.id),
    [
      "hero",
      "sensory",
      "how-to-order",
      "top-ten",
      "order-slip",
      "story",
      "recognition",
      "locations",
    ],
  );
  assert.equal(homeSections[0].heading, "一碗，由這裏開始");
  assert.deepEqual(
    homeSections[1].items.map((item) => `${item.sense}：${item.dish}`),
    ["香：瑞士雞翼", "厚：上湯花膠", "濃：南乳豬手"],
  );
  assert.equal(homeSections[2].flow, "湯 → 麵 → 餸");
  assert.deepEqual(homeSections[2].steps[0].flavours, ["咖喱", "沙嗲", "麻辣"]);
  assert.equal(homeSections[4].role, "transition");
  assert.equal(publicValue(homeSections[5].founder.englishName), "Simon Wong");
  assert.equal(
    publicValue(homeSections[5].founder.quotation),
    "最希望是港人珍惜本土風味食店。",
  );
  assert.equal(publicValue(homeSections[5].founder.name), "黃志強");

  assert.deepEqual(
    topTen.map((dish) => dish.name),
    [
      "上湯花膠",
      "清甜蘿蔔",
      "自制韭菜餃",
      "滷水豬大腸",
      "秘製牛孖根",
      "南乳豬手",
      "手打魚肉",
      "瑞士雞中翼",
      "玻璃辣魷魚",
      "蠔皇小花菇",
    ],
  );

  const shamShuiPo = locations[0];
  const tsimShaTsui = locations[1];
  assert.equal(shamShuiPo.role, "primary");
  assert.equal(tsimShaTsui.role, "secondary");
  assert.equal(publicValue(shamShuiPo.hours), "每日 11:00–04:00");
  assert.equal(
    publicValue(shamShuiPo.foodpanda),
    "https://www.foodpanda.hk/zh/chain/cu0nv/man-kee-cart-noodle",
  );
  assert.equal(
    publicValue(tsimShaTsui.address),
    "尖沙咀廣東道3-27號海港城港威商場4樓4102號舖11號檔 Food Atlas",
  );
  assert.equal(publicValue(tsimShaTsui.hours), "每日 11:00–21:00");
  assert.equal(
    publicValue(tsimShaTsui.foodpanda),
    "https://www.foodpanda.hk/zh/restaurant/anos/man-kee-cart-noodle-harbour-city-anos",
  );
  assert.equal(publicValue(shamShuiPo.phone), "(+852) 9059-5104");
  assert.equal(publicValue(shamShuiPo.email), "mankeecartnoodles@gmail.com");
  assert.equal(
    publicValue(shamShuiPo.mapUrl),
    "https://share.google/otLrnzLumqWZaN8mg",
  );
  for (const fact of [
    shamShuiPo.lastOrder,
    shamShuiPo.holidays,
    shamShuiPo.keeta,
    tsimShaTsui.mapUrl,
    tsimShaTsui.phone,
    tsimShaTsui.keeta,
  ]) {
    assert.equal(publicValue(fact), undefined);
  }

  assert.deepEqual(
    recognition.map((item) => publicValue(item.name)),
    ["米芝蓮", "白種元", "黎芷珊"],
  );
  assert.equal(publicValue(recognition[0].line), "米芝蓮");
  assert.equal(publicValue(recognition[1].line), "白種元曾到訪文記");
  assert.equal(publicValue(recognition[2].line), "黎芷珊曾到訪文記");
  assert.equal(publicValue(recognition[0].wording), undefined);
  assert.equal(publicValue(recognition[0].yearRange), "2018–2025");
  assert.equal(publicValue(recognition[1].quotation), undefined);
  assert.equal(publicValue(recognition[2].portrait), undefined);

  const contentDir = join(root, "src/content");
  const files = walk(contentDir);
  const source = files.map((file) => readFileSync(file, "utf8")).join("\n");
  assert.doesNotMatch(source, /11:00–23:00|11:00-23:00|keeta\.|\$\d/);
});

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}
