import { Selector } from 'testcafe';

fixture`Getting Started`
    .page `http://172.0.0.1:8000/register`;

test('Register User', async t => {
    await t
        .typeText('input#email', 'testuser@pixi')
        .typeText('input#password', 'testpw')
        .click('body > div.jumbotron.jumbotron-fluid > div > div:nth-child(5) > div.col-8 > form > button')
        //After registration the search pixi field should be there
        //.expect('#search_query')
});
