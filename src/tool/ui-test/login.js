async function login(page) {
        await page.click('#userName');
        await page.keyboard.type("admin");
        await page.click('#passwordbefore');
        await page.keyboard.type("123456");
        await page.click(".login_button");
        await page.waitFor(3000);
        return true;
}

exports.login = login