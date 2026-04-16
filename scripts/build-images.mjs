import fs from "node:fs";
import path from "node:path";
import https from "node:https";
import { fileURLToPath } from "node:url";
import { pipeline } from "node:stream/promises";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "assets", "img");
fs.mkdirSync(outDir, { recursive: true });

const jobs = [
  {
    id: "hero",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAuadaLvvb2JaeXzWDkEZZzpueiz0IMmAkGw8X3863sLjerKMcrQjjwBmbctmJ3P007Mj9ME4cilP6a4By0oN1c4jjlH3Zrq-b0svfl5XZEEUb5kN-IFw88vjMB0-TlMe2zoIIs-B41m18w5NGtFl3wgPRgESM47j-OseoDScka9JFKVkqT1W3i_7c3MbseV4D9Uv-2rn0wDhGWKUlX6l4STW6il4erlir9HAjkGq3bqm2DXG-uDxiF1lx8s00j9eSwuqbCHIz6epcH",
    variants: [
      { name: "hero-1280.webp", width: 1280, height: 720 },
      { name: "hero-1920.webp", width: 1920, height: 1080 },
    ],
  },
  {
    id: "sensor",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8eppQ75M8ys2MRWqzL07r3LeYluCjGKRKFWin0Bkp2F3HBvNRaRToXY_WtKffRhvskO9H3BM3-t8yDXG0cPt84SODkThuxI-W3ku64c-P4KGJmEav4fM5ieaW8Ps2w6CnQW4jRglCzTBnr-CVn0uCz84jhnL_m6cRYzXaCjYiu6liVnYBF81JvvqrJL6ZIbMWHX3ge4sK-Uq30u-GgPAXk4zw8eBL6nDVfS6ag14MDcbQhBoOQn_MvFBsYgzPZxUZV2qhSSTgy-xK",
    variants: [
      { name: "sensor-800.webp", width: 800, height: 600 },
      { name: "sensor-1200.webp", width: 1200, height: 900 },
    ],
  },
  {
    id: "workflow-attach",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsRK7kUo7v34lDAV_SnD6TlD3hnIqexnQ1GzrtInyZJqRHVwRYcSCxl8Wg5UruhLW11qrNvZEaycCsVkr6bCdJXOP3GqxDOwNlRsXzlED615_TARHDAH14inlS43vWN7WRtcPJFwoRUjYrvY0_BVPRQcJGGX5C6LYHatfSM55snrGNGmFL-JqXs6X7h9_s-3Fl8rJA4TB2Hi31kumbbYj1FeSwLOD87LvVlXYL9e37Cw0jPhx6oWwqTT8-0F_9Eo4mhc03WhYcfg5y",
    variants: [
      { name: "workflow-attach-400.webp", width: 400, height: 256 },
      { name: "workflow-attach-800.webp", width: 800, height: 512 },
    ],
  },
  {
    id: "workflow-monitor",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuA973Wz4MQFEdKXn33HV9rTgFsxRHi5ulwWaN3CEUSW-5iv27hHFs6sJBUfseFmzF6eNjBHe6Z7Eufm6LHShkB22LdC7l1uSrXUlHfvczAgQdvgXP_eY3GjsF50IjBvmlHvVlXxH_M6ICYRfID9vYVkQc8GskMIjiEHRCUOw46pRaqTHCV2vvgKQ91Rhwc1sf9yzASNs9VrC-9L6o3FGUXF_i1AE4cVx-GrA12Q1MFerdiZhuhUeFxeAkmoCggOIiaK9ZdwmNYonyj9",
    variants: [
      { name: "workflow-monitor-400.webp", width: 400, height: 256 },
      { name: "workflow-monitor-800.webp", width: 800, height: 512 },
    ],
  },
  {
    id: "workflow-act",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAy5ZibVOe46Y29nHamc0uwuY0GPw-vh70fK_dKXrAX84ZsGtczYSkGcrJvi-jivRrowTgJdwd7G0hEzthajDyktoz8TOHX5tKNTA9QaB5P9e92PqFxx84EyBx-a-DWRg98hNgPDCh14eJFWX9_kb9Oi6-zscXTPsw7pofERvCHb4XOA3diPSNo15TxOIt3W4Dp290W8kkM_VGlcjiFccFYoh1OEw9fDiaujB-YkPkScuH5lEyCj66bFLcLzg5U3N4r_qV-LQu1mzKi",
    variants: [
      { name: "workflow-act-400.webp", width: 400, height: 256 },
      { name: "workflow-act-800.webp", width: 800, height: 512 },
    ],
  },
  {
    id: "hongkong",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsW5t9aCmVfYpc1hF1lwylJmhfAgrVab54V_ZvI6BmnBRjhNquqUxto2Ve-5RLzdC9CtIFgTQDgY3e6fsR1ADoWYaGGUTJTnb-D4-cnB9CSoxpD8Z2PHqH4iqXETJelw6Ak2e6I0xP25n7zmkYK5VLc0HEelro7yaGChGQXrT0HZDs3cHQuaFRdmxoECZ_sfdfGue48O5T9ptT4r8MK9SQPlOlL3V8ZdhxC7jF55AKijSLBaOoNF-h9ingD_FzQaRKaB5q-e8yo3Ky",
    variants: [
      { name: "hongkong-1280.webp", width: 1280, height: 720 },
      { name: "hongkong-1920.webp", width: 1920, height: 1080 },
    ],
  },
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https
      .get(url, (res) => {
        if (res.statusCode === 301 || res.statusCode === 302) {
          const next = res.headers.location;
          res.resume();
          if (!next) {
            reject(new Error("Redirect without location"));
            return;
          }
          download(next, dest).then(resolve).catch(reject);
          return;
        }
        if (res.statusCode !== 200) {
          reject(new Error(`Download failed ${res.statusCode}`));
          return;
        }
        pipeline(res, file).then(resolve).catch(reject);
      })
      .on("error", reject);
  });
}

async function main() {
  const tmp = path.join(outDir, "_tmp.bin");
  for (const job of jobs) {
    console.log("Downloading", job.id);
    await download(job.url, tmp);
    for (const v of job.variants) {
      const out = path.join(outDir, v.name);
      await sharp(tmp)
        .resize(v.width, v.height, { fit: "cover", position: "attention" })
        .webp({ quality: 82, effort: 4 })
        .toFile(out);
      console.log("Wrote", path.relative(root, out));
    }
  }
  fs.rmSync(tmp, { force: true });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
