const INITIAL_STATE =
{
    '/projects/current_projects': {
        name: 'Current Projects',
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
                name: 'Eigel Street',
                address: '4123 Eigel Street',
                neighborhood: 'Rice Military',
                specs: 'Two Units',
                path: '/projects/current_projects/eigel_street',
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
                name: 'Leverkuhn Street',
                address: '823+825 Leverkuhn Street',
                neighborhood: 'Rice Military',
                specs: 'Two units',
                path: '/projects/current_projects/leverkuhn_street',
                images: [
                    'http://i.imgur.com/mVM9YQG.png',
                    'http://i.imgur.com/JjWC032.png',
                    'http://i.imgur.com/T73kPyS.png',
                    'http://i.imgur.com/gbuoWPn.jpg'
                ]
            },
            {
                name: 'Sheraton',
                address: 'Sheraton',
                neighborhood: 'Medical Center',
                specs: 'Four, Front-load, Three-story Homes.',
                path: '/projects/current_projects/sheraton',
                images: [
                    'http://i.imgur.com/gbuoWPn.jpg'
                ]
            }
        ]
    },
    '/projects/investment_opportunities': {
        name: 'Investment Opportunities',
        projects: [
            {
                name: 'Center Street',
                address: '46 Sixteen Center Street',
                neighborhood: 'Washington Corridor',
                specs: 'Thirty-six Units.',
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
                specs: 'Corner Lot; Three, Front-load, Four-story Homes.',
                path: '/projects/investment_opportunities/west_clay_street',
                images: [
                    'http://i.imgur.com/2zjJRJB.png'
                ]
            }
        ]
    },
    '/projects/closed_projects': {
        name: 'Closed Projects',
        projects: [
            {
                name: '1721 Colquitt Street',
                address: '1721 Colquitt Street',
                neighborhood: 'Montrose',
                specs: 'Two-story Home',
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