var app = angular.module("movieApp", []);

app.factory('movieFactory', function () {
    var allMoviesList = [{
            img: "http://static.comicvine.com/uploads/original/10/104544/4068923-tarzan-wallpaper-walt-disneys-tarzan-6248938-1024-768.jpg",
            title: "Tarzan",
            year: 1999,
            price: 2.00,
            descrShort: "The movie is about the life of Tarzan. Tarzan was a small orphan who was raised by an ape named Kala since he was a child. He believed that this was his family, but on an expedition Jane Porter is rescued by Tarzan."
        },
        {
            img: "http://cdn.collider.com/wp-content/uploads/2016/04/the-lion-king-image.jpg",
            title: "The Lion King",
            year: 1994,
            price: 3.00,
            descrShort: "A young lion Prince is cast out of his pride by his cruel uncle, who claims he killed his father. While the uncle rules with an iron paw, the prince grows up beyond the Savannah, living by a philosophy: No worries for the rest of your days."
        },
        {
            img: "http://img.lum.dolimg.com/v1/images/characters_beautyandthebeast_belle_852af5fe.jpeg?region=0,0,1536,788&width=1200",
            title: "Beauty and the Beast",
            year: 1991,
            price: 4.00,
            descrShort: "A kickass woman named Belle who does not succumb to social norms gets crap from a bunch of village idiots, chief amongst them a total tool named Gaston. Belle shows everyone how great she is when she turns a beast (not Gaston) into a man. Love."
        },
        {
            img: "http://cdn1.thr.com/sites/default/files/imagecache/scale_crop_768_433/2015/07/sword_in_the_stone_still.jpg",
            title: "The Sword in the Stone",
            year: 1963,
            price: 5.00,
            descrShort: "Arthur (aka Wart) is a young boy who aspires to be a knight's squire. On a hunting trip he falls in on Merlin, a powerful but amnesiac wizard who has plans for Wart beyond mere squiredom."
        },
        {
            img: "http://www.cgmeetup.net/forums/uploads/gallery/album_1392/med_gallery_646_1392_48130.jpg",
            title: "Beauty and the Beast",
            year: 2016,
            price: 6.00,
            descrShort: "Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so I would think, given how breath-takingly pretty she is. I mean wow. Rumor has it she'll whip out a wand and turn Gaston into a toad."
        }
    ]

    var userMoviesList = [];

    var addToUserList = function (data) {
        if (userCurrency.amount - data.movie.price > 0) {
            if (userMoviesList.length === 0) {
                userMoviesList.push(data.movie);
                userCurrency.amount -= data.movie.price;
            } else {
                var count = 0;
                for (i = 0; i < userMoviesList.length; i++) {
                    if (data.movie.title === userMoviesList[i].title && data.movie.year === userMoviesList[i].year) {} else {
                        count++;
                        if (count === userMoviesList.length) {
                            userMoviesList.push(data.movie);
                            userCurrency.amount -= data.movie.price;
                        }
                    }
                }
            }
        } else {
            alert('You cannot afford this - You are short: ' + (data.movie.price - userCurrency.amount));
        }
    }

    var removeFromUserList = function (data) {
        userCurrency.amount += data.movie.price;
        userMoviesList.splice(data.$index, 1);
    }

    var showMidBanner = {
        check: true
    };

    var userCurrency = {
        amount: 12
    }

    return {
        allMoviesList: allMoviesList,
        userMoviesList: userMoviesList,
        addToUserList: addToUserList,
        removeFromUserList: removeFromUserList,
        showMidBanner: showMidBanner,
        userCurrency: userCurrency
    };
});