describe('My Login application', () => {
    it('open page', async () => {
        await browser.url(`https://the-internet.herokuapp.com/login`);
    });
    it("fill user info",    async () => {

        await $('#username').setValue('tomsmith');
        await $('#password').setValue('SuperSecretPassword!');
        await $('button[type="submit"]').click();
    });
    it ("check auth", async () => {
         
        await expect($('#flash')).toBeExisting();
        await expect($('#flash')).toHaveTextContaining(
            'You logged into a secure area!');
    });
});

