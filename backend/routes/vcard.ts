import VCard from 'vcard-creator'

export function vcardRoute(req: Request) {
    //create a new vCard
    const myVCard = new VCard()

    myVCard
        .addName("Forney", "Leo")
        .addJobtitle('Software Engineer')
        .addEmail('forneyleo@gmail.com')
        .addPhoneNumber(8479469328, 'CELL')
        .addURL('https://leoforney.me')

    const res = new Response(myVCard.toString(), { status: 200 });
    res.headers.set('Content-Type', 'text/vcard')
    return res;
}