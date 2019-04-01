import { Selector } from 'testcafe';

fixture`Getting Started`
    .page `http://localhost:8001/register`;

test('Register User WITH CRS', async t => {
    await t
        .typeText('input#email', 'testuser@pixi')
        .typeText('input#password', 'testpw')
        .click('body > div.jumbotron.jumbotron-fluid > div > div:nth-child(5) > div.col-8 > form > button')
        //After registration the search pixi field should be there
        //.expect('#search_query')
});
