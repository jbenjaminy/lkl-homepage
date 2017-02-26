const INITIAL_STATE =
{
    '/projects/current_projects': {
        name: 'CURRENT PROJECTS',
        projects: [
            {
                name: 'North Braeswood Boulevard',
                address: '3839 North Braeswood Boulevard',
                neighborhood: 'Braeswood Place',
                specs: 'Twelve units',
                path: '/projects/current_projects/north_braeswood_blvd',
                images: [
                    'http://i.imgur.com/JP4PEGl.png',
                    'http://i.imgur.com/UOYfKrQ.png',
                    'http://i.imgur.com/IRBym0Y.png'
                ]
            },
            {
                name: 'Center Street',
                address: 'Center Street',
                neighborhood: 'Washington Corridor',
                specs: 'Fourplex',
                path: '/projects/current_projects/center_street',
                images: [
                    'http://i.imgur.com/zbLTvAS.png?1',
                    'http://i.imgur.com/YHsplXZ.png'
                ]
            },
            {
                name: 'Leverkuhn Street',
                address: '823+825 Leverkuhn Street',
                neighborhood: 'Rice Military',
                specs: 'Two units',
                path: '/projects/current_projects/leverkuhn_street',
                images: [
                    'http://i.imgur.com/upoUK4u.png',
                    'http://i.imgur.com/mVM9YQG.png',
                    'http://i.imgur.com/JjWC032.png',
                    'http://i.imgur.com/T73kPyS.png',
                    'http://i.imgur.com/gbuoWPn.jpg'
                ]
            },
            {
                name: 'Sheridan Street',
                address: '2435+2503 Sheridan Street',
                neighborhood: 'Medical Center',
                specs: 'Two lots, each divided into three, for a total of six freestanding homes.',
                path: '/projects/current_projects/sheridan_street',
                images: [
                    'http://i.imgur.com/BGcnGoU.png',
                    'http://i.imgur.com/HbT2GTp.png',
                    'http://i.imgur.com/xR54clF.png',
                    'http://i.imgur.com/c9Ayie5.png',
                    'http://i.imgur.com/llKqEIo.png'
                ]
            }
        ]
    },
    '/projects/investment_opportunities': {
        name: 'INVESTMENT OPPORTUNITIES',
        projects: [
            {
                name: 'Center Street',
                address: '46 Sixteen Center Street',
                neighborhood: 'Washington Corridor',
                specs: 'Thirty-six units',
                path: '/projects/investment_opportunities/center_street',
                images: [
                    'http://i.imgur.com/5F2QvCO.png',
                    'http://i.imgur.com/cMZvjTt.png',
                    'http://i.imgur.com/cO9lqwR.png',
                    'http://i.imgur.com/iuNGDQt.png',
                    'http://i.imgur.com/Rbo9f23.png',
                    'http://i.imgur.com/22TURQ8.png',
                    'http://i.imgur.com/4tCpmSQ.png',
                    'http://i.imgur.com/eIMWd8I.png',
                    'http://i.imgur.com/ZXkkVit.png',
                    'http://i.imgur.com/2zjJRJB.png'
                ]
            },
            {
                name: 'West Clay Street',
                address: '1816 West Clay Street',
                neighborhood: 'Montrose',
                specs: 'Corner lot with three, front-load, four-story homes',
                path: '/projects/investment_opportunities/west_clay_street',
                images: [
                    'http://i.imgur.com/4VosEEB.png'
                ]
            }
        ]
    },
    '/projects/closed_projects': {
        name: 'CLOSED PROJECTS',
        projects: [
            {
                name: '1721 Colquitt Street',
                address: '1721 Colquitt Street',
                neighborhood: 'Montrose',
                specs: 'Two-story home',
                path: '/projects/closed_projects/1721_colquitt_street',
                images: [
                    'http://i.imgur.com/mBYN0yH.jpg',
                    'http://i.imgur.com/Uw6tPyg.jpg',
                    'http://i.imgur.com/EVBWixD.jpg',
                    'http://i.imgur.com/U3ItsES.jpg',
                    'http://i.imgur.com/MdZr5KP.jpg',
                    'http://i.imgur.com/KJ1L6lH.jpg',
                    'http://i.imgur.com/fUZSs58.jpg',
                    'http://i.imgur.com/RQnrSEe.jpg',
                    'http://i.imgur.com/zh9zrJ9.jpg'
                ]
            },
            {
                name: 'Eigel Street',
                address: '4123 Eigel Street',
                neighborhood: 'Rice Military',
                specs: 'Two Units',
                path: '/projects/closed_projects/eigel_street',
                images: [
                    'http://i.imgur.com/OABvzCB.png',
                    'http://i.imgur.com/vLLFvDR.png',
                    'http://i.imgur.com/KM1Jay5.png',
                    'http://i.imgur.com/bhTFofV.png',
                    'http://i.imgur.com/Rkch0n6.jpg',
                    'http://i.imgur.com/q3NKe27.jpg',
                    'http://i.imgur.com/gTsqaNV.png',
                    'http://i.imgur.com/tTeaNXx.png',
                    'http://i.imgur.com/ryPngia.png',
                    'http://i.imgur.com/iI6Pn8s.png',
                    'http://i.imgur.com/LSJexMD.png',
                    'http://i.imgur.com/6sMLUu6.png',
                    'http://i.imgur.com/XzhEyUE.jpg'
                ]
            },
            {
                name: '1705 Dunlavy Street',
                address: '1705 Dunlavy Street',
                neighborhood: 'Montrose',
                specs: 'Land was replatted into three lots and sold to a builder.',
                path: '/projects/closed_projects/1705_dunlavy_street',
                images: [
                    'http://i.imgur.com/4px7IbS.png'
                ]
            }
        ]
    }
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
