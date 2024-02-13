import axios from "axios";
import parseString from "xml2js";
import fs from "node:fs";

async function getFafaItProducts(baseUrl: string) {
    try {
        const res = await axios.get(baseUrl);
        console.log(`code: ${res.status}`);

        const parser = await parseString.parseStringPromise(res.data);

        var urlList: { loc: string[] }[] = parser["urlset"]["url"];
        console.log("products count:", urlList.length);
        const _path = `./src/products/${
            baseUrl.replace("https://", "").split("/")[0]
        }`;
        let results: object[] = [];
        // for (var i = 0; i < urlList.length; i++) {
        for (var i = 0; i < 10; i++) {
            const url = urlList[i].loc;
            const product = await axios.get(url[0]);
            const strHtml: string = product.data;

            const regexTitle: RegExp = /<h1 class="product-name">(.*?)<\/h1>/;
            const regexSpec: RegExp = /<ul class="technical-specs">(.*?)<\/ul>/;
            const regexPrice: RegExp =
                /<span class="h1 mb-0" data-v-b09b87e2="">(.*?)<small data-v-b09b87e2=""><span class="small text-muted mr-1" data-v-b09b87e2="">تومان<\/span><\/small><\/span>/;

            const matchTitle: RegExpExecArray | null = regexTitle.exec(strHtml);
            const matchPrice: RegExpExecArray | null = regexPrice.exec(strHtml);
            const matchSpec: RegExpExecArray | null = regexSpec.exec(strHtml);

            const title: string | null = matchTitle ? matchTitle[1] : null;
            const price: string | null = matchPrice ? matchPrice[1] : null;
            const spec: string | null = matchSpec ? matchSpec[1] : null;

            console.log(title);
            console.log(price);
            console.log(spec);
            console.log(url[0]);

            if(await fs.existsSync("fafait.lst")){
                console.log("file exists");
                const items = await fs.readFileSync("fafait.lst")
            }
            

            results.push({
                title,
                price,
                spec,
            });
        }
        await fs.writeFileSync("fafait.json", JSON.stringify(results));
        // await fs.writeFile("fafait.lst", JSON.stringify(items));
        // const urlsJson = {
        //   urls: urls,
        // };

        // await fs.writeFile(`${path}.json`, JSON.stringify(urlsJson));
        console.log("Done");
    } catch (error) {
        console.log(error);
    }
}

console.clear();
getFafaItProducts("https://fafait.net/sitemap.xml");
