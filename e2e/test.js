const {chromium} = require('playwright');

(async ()=>{
    const browser=await chromium.launch({ headless:false});
    const page= await browser.newPage();
    await page.goto('https://with-bugs.practicesoftwaretesting.com');
    await page.click('text= Register your account');
    await page.fill('#first_name', 'Test');
    await page.fill('#last_name', 'User');
    await page.fill('#email', 'testuser123456@gmail.com');
    await page.fill('#password', 'Password123');
    await page.click('button[type="submit"]');
    await page.goto('https://with-bugs.practicesoftwaretesting.com/login');
    await page.fill('#email', 'testuser123456@gmail.com');
    await page.fill('#password', 'Password123');
    await page.click('button[type="Login"]');

    // search for a product
    await page.fill('input[type=search]','hammer');
    await page.keyboard.press('Enter');
    await page.click('.card');
    // add to cart
    await page.click('text=Add to cart');
   // verify cart count
   const count=await page.textContent('.cart-count');
   if(count!='1'){
    
    throw new Error('Cart count is incorrect');}
    console.log('Automated test passed successfully');
    await browser.close();
})();