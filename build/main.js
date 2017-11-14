webpackJsonp([0],{

/***/ 22:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 22;

/***/ }),

/***/ 24:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 24;

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./src/pages/game-over/game-over.ts
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the GameOverPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var game_over_GameOverPage = (function () {
    function GameOverPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    GameOverPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GameOverPage');
    };
    GameOverPage.prototype.PlayAgain = function () {
        this.navCtrl.push(choose_level_ChooseLevelPage);
    };
    GameOverPage.prototype.Home = function () {
        this.navCtrl.push(start_game_StartGamePage);
    };
    return GameOverPage;
}());
game_over_GameOverPage = __decorate([
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */]({
        selector: 'page-game-over',template:/*ion-inline-start:"C:\Users\Sidharthramanan\Documents\Sublime Text 3\Projects\Game\src\pages\game-over\game-over.html"*/'<!--\n  Generated template for the GameOverPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<style>\n .bgimg {\n 	background-image : url(\'assets/black.jpg\');\n 	background-repeat: no-repeat;\n 	background-size: cover;\n }\n</style> \n<ion-header>\n\n  <ion-navbar hideBackButton>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bgimg">\n <img src="assets/gameover.gif" style="width:100%; height:80%">\n <button ion-button full (click)="PlayAgain()">Play Again</button>\n <button ion-button full color="danger" (click)="Home()">Home</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Sidharthramanan\Documents\Sublime Text 3\Projects\Game\src\pages\game-over\game-over.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], game_over_GameOverPage);

//# sourceMappingURL=game-over.js.map
// CONCATENATED MODULE: ./src/pages/slides/slides.ts
/* harmony import */ var slides___WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var slides___WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var slides___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var slides___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var slides_SlidesPage = (function () {
    function SlidesPage(navCtrl, navParams, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.wins = this.navParams.data.wins;
        this.pandas = [];
        this.partofcode = this.navParams.data.gamewinningcode.substring(2, 4);
        this.arrayOfImages = ["assets/key.jpg", "assets/2017.jpg", "assets/algorithm.jpg", "assets/cat.jpg", "assets/chocolate.jpg", "assets/clown.png", "assets/dab.jpg", "assets/deeznuts.jpg", "assets/dipper.png", "assets/dog.jpg", "assets/donald-trump.jpg", "assets/epii.jpg", "assets/fidget.jpg", "assets/flinstones.jpg", "assets/gobstoppers.jpg", "assets/icecream.jpg", "assets/pandalogo2.jpg", "assets/Morty.jpg", "assets/obama.jpg", "assets/rick.jpg", "assets/simpson.jpg", "assets/sponge.jpg", "assets/spongebob.png", "assets/tswift.jpg", "assets/monalisa.gif", "assets/pandalogo2.jpg", "assets/lock.png", "assets/beth.jpg", "assets/dannyphantom.jpg", "assets/billcipher.jpg", "assets/bigbang.jpg", "assets/calvin.png", "assets/atom.jpg", "assets/illuminati.jpg", "assets/leo.jpg", "assets/jewel.jpg", "assets/optical.jpg", "assets/optical1.jpg", "assets/optical2.jpg", "assets/rugrats.jpg", "assets/LHC.jpg", "assets/milkyway.jpg", "assets/milkyway2.jpg", "assets/mario.jpg", "assets/mariomushroom.jpg", "assets/freddy.jpg", "assets/xbox.jpg", "assets/yoshi.jpg", "assets/cat.jpg", "assets/luigi.jpg", "assets/ps4.jpg", "assets/nintendoswitch.jpg", "assets/bowser.jpg", "assets/toad.jpg", "assets/link.jpg", "assets/donald-trump.jpg", "assets/epii.jpg", "assets/fidget.jpg", "assets/flinstones.jpg", "assets/gobstoppers.jpg", "assets/icecream.jpg", "assets/Morty.jpg", "assets/obama.jpg", "assets/rick.jpg", "assets/simpson.jpg", "assets/pandalogo2.jpg", "assets/pandalogo2.jpg", "assets/sponge.jpg", "assets/spongebob.png", "assets/tswift.jpg"];
        this.clickArray = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
        this.mykeys = this.navParams.data.mykeys;
        if (this.navParams.data.wins[1]["Slides"] == true) {
            var al = this.alertCtrl.create({
                title: "Congrats!",
                message: "<img src=\"assets/pandashortened.gif\"><div>You win level 2! The second part of your code is : " + this.partofcode + "</div>",
                buttons: [{
                        text: "OK",
                        role: "OK",
                        handler: function () {
                            _this.wins[1]["Slides"] = true;
                            _this.navCtrl.push(main_room_MainRoomPage, { mykeys: _this.mykeys, gamewinningcode: _this.navParams.data.gamewinningcode, wins: _this.wins, difficulty: _this.navParams.data.difficulty });
                        }
                    }],
                enableBackdropDismiss: false
            });
            al.present();
        }
        else {
            this.win = false;
            this.numslides = 0;
            if (this.navParams.data.difficulty === "Easy") {
                this.timer = 50;
            }
            if (this.navParams.data.difficulty === "Medium") {
                this.timer = 40;
            }
            if (this.navParams.data.difficulty === "Hard") {
                this.timer = 30;
            }
            for (var i = 0; i < this.arrayOfImages.length; i++) {
                var temp = this.arrayOfImages[i];
                var x = Math.floor(Math.random() * 67);
                this.arrayOfImages[i] = this.arrayOfImages[x];
                this.arrayOfImages[x] = temp;
            }
            this.timeleft = this.timer;
            this.timeup = false;
            setInterval(function () {
                if (_this.win == true) {
                    _this.timeup = true;
                    _this.timeleft = null;
                }
                if (_this.timeup == false) {
                    _this.timeleft--;
                    if (_this.timeleft <= 10) {
                        _this.color = "red";
                    }
                    if (_this.timeleft == 0) {
                        _this.navCtrl.push(game_over_GameOverPage);
                    }
                }
            }, 1000);
        }
    }
    SlidesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SlidesPage');
        if (this.navParams.data.wins[1]["Slides"] == false) {
            var a = this.alertCtrl.create({
                title: "Reach the 70th slide and click all the pandas before time runs out!",
                message: "<img src=\"assets/pandashortened.gif\">",
                buttons: [{ text: "OK", role: "OK" }]
            });
            a.present();
        }
    };
    SlidesPage.prototype.Clicked = function (image) {
        for (var i = 0; i < this.arrayOfImages.length; i++) {
            if (image == this.arrayOfImages[i]) {
                if (image == "assets/pandalogo2.jpg" && this.clickArray[i] == false) {
                    this.pandas.push("assets/pandalogo2.jpg");
                }
                this.clickArray[i] = true;
                console.log(this.clickArray[i]);
                break;
            }
        }
    };
    SlidesPage.prototype.slideChanged = function () {
        var _this = this;
        this.numslides = this.slides.getActiveIndex();
        console.log(this.arrayOfImages[this.numslides - 1]);
        console.log(this.clickArray[this.numslides - 1]);
        if (this.arrayOfImages[this.numslides - 1] == "assets/pandalogo2.jpg" && this.clickArray[this.numslides - 1] == false) {
            console.log("Game over from slides");
            this.navCtrl.push(game_over_GameOverPage);
        }
        if (this.numslides == 69) {
            this.win = true;
            this.timeleft = null;
            var al = this.alertCtrl.create({
                title: "Congrats",
                message: "<img src=\"assets/pandashortened.gif\"><div>You win level 2! The second part of your code is : " + this.partofcode + "</div>",
                buttons: [{
                        text: "OK",
                        role: "OK",
                        handler: function () {
                            _this.mykeys.push("ButtonsKey");
                            _this.wins[1]["Slides"] = true;
                            _this.navCtrl.push(main_room_MainRoomPage, { mykeys: _this.mykeys, gamewinningcode: _this.navParams.data.gamewinningcode, wins: _this.wins, difficulty: _this.navParams.data.difficulty });
                        }
                    }],
                enableBackdropDismiss: false
            });
            al.present();
        }
        this.arrayOfImages[this.numslides - 1] = "assets/keepgoing.jpg";
    };
    SlidesPage.prototype.ionViewDidLeave = function () {
        this.timeleft = null;
    };
    return SlidesPage;
}());
slides___decorate([
    slides___WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */](slides___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Slides */]),
    slides___metadata("design:type", slides___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Slides */])
], slides_SlidesPage.prototype, "slides", void 0);
slides_SlidesPage = slides___decorate([
    slides___WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */]({
        selector: 'page-slides',template:/*ion-inline-start:"C:\Users\Sidharthramanan\Documents\Sublime Text 3\Projects\Game\src\pages\slides\slides.html"*/'<!--\n  Generated template for the SlidesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<style>\n .bgimg {\n    background-image : url(\'assets/slidebg.jpg\');\n    background-repeat: no-repeat;\n    background-size: cover;\n }\n</style> \n<ion-header>\n\n  <ion-navbar hideBackButton>\n    <p [style.color]="color" style="text-align:right; font-weight:bold; font-size:30px">Time left : {{timeleft}}</p>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bgimg">\n   <ion-slides (ionSlideDidChange) ="slideChanged()">\n    <ion-slide *ngFor="let image of arrayOfImages" (click)="Clicked(image)" style="width:100%; height:90%; margin-bottom:0px; padding-bottom:0px"><img src={{image}} style="width:100%; height:80%"/></ion-slide>   \n   </ion-slides>\n\n <p style="font-weight: bold; font-style:courier;color:yellow; font-size:20px; margin-top:0px; padding-top:0px; margin-bottom:3px">Slides passed : {{numslides}}</p>\n <ion-row>\n  <img *ngFor="let panda of pandas" src={{panda}} style="width:10%; height:10%; margin-right:5%">\n </ion-row>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Sidharthramanan\Documents\Sublime Text 3\Projects\Game\src\pages\slides\slides.html"*/,
    }),
    slides___metadata("design:paramtypes", [slides___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], slides___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], slides___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], slides_SlidesPage);

//# sourceMappingURL=slides.js.map
// CONCATENATED MODULE: ./src/pages/home/home.ts
/* harmony import */ var home___WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var home___WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var home___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var home___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var home_HomePage = (function () {
    function HomePage(navCtrl, alertCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.messages = ["Click me!", "Catch me", "Hahaha", "Too slow!", "Oop!", "Give up?", "Too fast huh?", "Muahaha", "I'm right here!", "Woohoo! Over here!"];
        this.showSomeShit = false;
        this.colors = ["danger", "light", "dark", ""];
        this.partofcode = this.navParams.data.gamewinningcode.substring(0, 2);
        this.mykeys = this.navParams.data.mykeys;
        this.wins = this.navParams.data.wins;
        if (this.navParams.data.wins[0]["MockingButton"] == true) {
            var al = this.alertCtrl.create({
                title: "Congrats!",
                message: "<img src=\"assets/pandashortened.gif\"><div>You win level 1! The first part of your code is : " + this.partofcode + "</div>",
                buttons: [{
                        text: "OK",
                        role: "OK",
                        handler: function () {
                            _this.wins[0]["MockingButton"] = true;
                            _this.navCtrl.push(main_room_MainRoomPage, { mykeys: _this.mykeys, gamewinningcode: _this.navParams.data.gamewinningcode, wins: _this.wins, difficulty: _this.navParams.data.difficulty });
                        }
                    }],
                enableBackdropDismiss: false
            });
            al.present();
        }
        else {
            this.count = 30;
            this.timeup = false;
            this.clicks = 0;
            this.alertPresented = false;
            this.stop = false;
            this.goal = 10;
            if (this.navParams.data.difficulty === "Easy") {
                this.delay = 700;
            }
            if (this.navParams.data.difficulty === "Medium") {
                this.delay = 600;
            }
            if (this.navParams.data.difficulty === "Hard") {
                this.delay = 500;
            }
            setInterval(function () {
                _this.left = Math.floor(Math.random() * 400);
                _this.top = Math.floor(Math.random() * 400);
                _this.colour = _this.colors[Math.floor(Math.random() * 4)];
                _this.message = _this.messages[Math.floor(Math.random() * 10)];
            }, this.delay);
            setInterval(function () {
                if (_this.timeup == false) {
                    _this.count--;
                    if (_this.count <= 10) {
                        _this.color = "red";
                    }
                    if (_this.count == 0 && _this.clicks < _this.goal) {
                        _this.navCtrl.push(game_over_GameOverPage);
                    }
                    if (_this.clicks >= _this.goal) {
                        _this.count = null;
                        if (_this.alertPresented == false) {
                            var al = _this.alertCtrl.create({
                                title: "Congrats!",
                                message: "<img src=\"assets/pandashortened.gif\"><div>You win level 1! The first part of your code is : " + _this.partofcode + "</div>",
                                buttons: [{
                                        text: 'OK',
                                        role: 'OK',
                                        handler: function () {
                                            _this.mykeys.push("SlidesKey");
                                            _this.wins[0]["MockingButton"] = true;
                                            _this.navCtrl.push(main_room_MainRoomPage, { mykeys: _this.mykeys, gamewinningcode: _this.navParams.data.gamewinningcode, wins: _this.wins, difficulty: _this.navParams.data.difficulty });
                                        }
                                    }],
                                enableBackdropDismiss: false
                            });
                            al.present();
                            _this.alertPresented = true;
                        }
                    }
                }
            }, 1000);
        }
    }
    HomePage.prototype.ionViewDidLoad = function () {
        if (this.navParams.data.wins[0]["MockingButton"] == false) {
            var a = this.alertCtrl.create({
                title: "Click the moving button " + this.goal + " Times, except when it's red!",
                message: "<img src=\"assets/pandashortened.gif\">",
                buttons: [{ text: "OK", role: "OK" }]
            });
            a.present();
        }
    };
    HomePage.prototype.goToSlides = function () {
        this.navCtrl.push(slides_SlidesPage);
    };
    HomePage.prototype.Click = function () {
        if (this.colour == "danger") {
            this.navCtrl.push(game_over_GameOverPage);
        }
        else {
            this.clicks++;
        }
    };
    HomePage.prototype.ionViewDidLeave = function () {
        this.count = null;
    };
    return HomePage;
}());
home_HomePage = home___decorate([
    home___WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */]({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\Sidharthramanan\Documents\Sublime Text 3\Projects\Game\src\pages\home\home.html"*/'<style>\n .bgimg {\n 	background-image : url(\'assets/polka.gif\');\n 	background-repeat: no-repeat;\n 	background-size: cover;\n }\n</style> \n<ion-header>\n  <ion-navbar hideBackButton>\n   <p [style.color]="color" style="float:left; font-weight:bold; font-size:20px">Time left : {{count}}</p>\n   <p style="float:left; font-weight:bold; font-size:20px; padding-left:25%">Clicks : {{clicks}}</p>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="bgimg">\n<button ion-button small [color]="colour" [style.top]="top" [style.left]="left" (click)="Click()">{{message}}</button>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Sidharthramanan\Documents\Sublime Text 3\Projects\Game\src\pages\home\home.html"*/
    }),
    home___metadata("design:paramtypes", [home___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], home___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], home___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], home_HomePage);

//# sourceMappingURL=home.js.map
// CONCATENATED MODULE: ./src/pages/you-win/you-win.ts
/* harmony import */ var you_win___WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var you_win___WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var you_win___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var you_win___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the YouWinPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var you_win_YouWinPage = (function () {
    function YouWinPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    YouWinPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad YouWinPage');
    };
    YouWinPage.prototype.PlayAgain = function () {
        this.navCtrl.push(choose_level_ChooseLevelPage);
    };
    YouWinPage.prototype.Home = function () {
        this.navCtrl.push(start_game_StartGamePage);
    };
    return YouWinPage;
}());
you_win_YouWinPage = you_win___decorate([
    you_win___WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */]({
        selector: 'page-you-win',template:/*ion-inline-start:"C:\Users\Sidharthramanan\Documents\Sublime Text 3\Projects\Game\src\pages\you-win\you-win.html"*/'<!--\n  Generated template for the YouWinPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar hideBackButton>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <img src="assets/You win.gif" style="width:100%;height:80%">\n  <button ion-button full (click)="PlayAgain()">Play Again</button>\n  <button ion-button full color="danger" (click)="Home()">Home</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Sidharthramanan\Documents\Sublime Text 3\Projects\Game\src\pages\you-win\you-win.html"*/,
    }),
    you_win___metadata("design:paramtypes", [you_win___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], you_win___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], you_win_YouWinPage);

//# sourceMappingURL=you-win.js.map
// CONCATENATED MODULE: ./src/pages/enter-code/enter-code.ts
/* harmony import */ var enter_code___WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var enter_code___WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var enter_code___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var enter_code___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the EnterCodePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var enter_code_EnterCodePage = (function () {
    function EnterCodePage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.mykeys = this.navParams.data.mykeys;
        this.win = false;
        this.yourCode = "00000000";
    }
    EnterCodePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EnterCodePage');
    };
    EnterCodePage.prototype.ButtonValue = function (number) {
        if (this.yourCode.length < 8) {
            this.yourCode = this.yourCode + number;
            if (this.yourCode == this.navParams.data.gamewinningcode) {
                this.win = true;
                /*let alert = this.alertCtrl.create({
                    title : "You Win",
                    message : "You Have Won the Game!!",
                    buttons : [{
                    text : "Play Again",
                    role : "Play Again",
                    handler : () =>{
                      this.navCtrl.push(MainRoomPage,{ playingagain : true});
                    }
                  },
                  {
                    text : "Nah",
                    role : "Nah",
                    handler : () =>{
                        this.navCtrl.push(StartGamePage);
                    }
                  }]
                });
                alert.present();*/
                this.navCtrl.push(you_win_YouWinPage);
            }
            else if (this.yourCode.length == 8 && this.yourCode != this.navParams.data.gamewinningcode) {
                var al = this.alertCtrl.create({
                    title: "Oops",
                    message: "Incorrect Code",
                    buttons: [{
                            text: "OK",
                            role: "OK",
                        }]
                });
                al.present();
            }
        }
        else {
            this.yourCode = "" + number;
            console.log(this.yourCode);
        }
    };
    return EnterCodePage;
}());
enter_code_EnterCodePage = enter_code___decorate([
    enter_code___WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */]({
        selector: 'page-enter-code',template:/*ion-inline-start:"C:\Users\Sidharthramanan\Documents\Sublime Text 3\Projects\Game\src\pages\enter-code\enter-code.html"*/'<!--\n  Generated template for the EnterCodePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<style>\n .bgimg {\n 	background-image : url(\'assets/entercodebg.jpg\');\n 	background-repeat: no-repeat;\n 	background-size: cover;\n }\n</style> \n<ion-header>\n\n  <ion-navbar>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bgimg">\n  <div style="padding-left:25%">\n  <ion-row>\n  <button ion-button large color="light" (click)="ButtonValue(\'1\')">1</button>\n  <button ion-button large color="dark" (click)="ButtonValue(\'2\')">2</button>\n  <button ion-button large color="light" (click)="ButtonValue(\'3\')">3</button>\n  </ion-row>\n  <ion-row>\n  <button ion-button large color="dark" (click)="ButtonValue(\'4\')">4</button>\n  <button ion-button large color="light" (click)="ButtonValue(\'5\')">5</button>\n  <button ion-button large color="dark" (click)="ButtonValue(\'6\')">6</button>\n  </ion-row>\n  <ion-row>\n     <button ion-button large color="light" (click)="ButtonValue(\'7\')">7</button>\n     <button ion-button large color="dark" (click)="ButtonValue(\'8\')">8</button>\n     <button ion-button large color="light" (click)="ButtonValue(\'9\')">9</button>\n  </ion-row>\n  </div>\n  <div style="padding-left:10px">\n  <ion-card>\n    <p style="font-weight:bold; font-size:15px; text-align:center">{{yourCode}}</p>\n  </ion-card>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Sidharthramanan\Documents\Sublime Text 3\Projects\Game\src\pages\enter-code\enter-code.html"*/,
    }),
    enter_code___metadata("design:paramtypes", [enter_code___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], enter_code___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], enter_code___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], enter_code_EnterCodePage);

//# sourceMappingURL=enter-code.js.map
// CONCATENATED MODULE: ./src/pages/buttons/buttons.ts
/* harmony import */ var buttons___WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var buttons___WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var buttons___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var buttons___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ButtonsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
/*export class ButtonsPage {
  
  randomCode : any;
  yourCode : any;
  selectOptions : any;
  codeFound : any;
  option : any;
  timeleft : any;
  timeup : any;
  color : any;
  sumOfDigits : any;
  productOfDigits : any;
  numberOfRepeats : any;
  largest : any;
  smallest : any;
  largestPos : any;
  smallestPos : any;
  mykeys : any;
  win : any;
  partofcode : any;
  wins : any;
  digits : any;
  digitlimit : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl : AlertController) {
    this.partofcode = this.navParams.data.gamewinningcode.substring(4,6);
    this.mykeys = this.navParams.data.mykeys;
    this.wins = this.navParams.data.wins;
    if(this.navParams.data.wins[2]["Buttons"]==true){
      let alert = this.alertCtrl.create({
            title : "Congrats Nitya!",
            message : `<img src="assets/pandashortened.gif"><div>You win level 3! The third part of your code is : ${this.partofcode}</div>`,
            buttons : [{
                      text : 'OK',
                      role : 'OK',
                      handler : () =>{
                        this.wins[2]["Buttons"] = true;
                        this.navCtrl.push(MainRoomPage, {mykeys : this.mykeys, gamewinningcode : this.navParams.data.gamewinningcode, wins : this.wins, difficulty: this.navParams.data.difficulty});
                      }
            }],
            enableBackdropDismiss : false
          });
          alert.present();
    }
    else{
    if(this.navParams.data.difficulty==="Easy"){
      this.digits = 3;
      this.digitlimit = 6;
      this.yourCode = "000";
    }
    if(this.navParams.data.difficulty==="Medium"){
      this.digits = 3;
      this.digitlimit = 9;
      this.yourCode = "000";
    }
    if(this.navParams.data.difficulty==="Hard"){
      this.digits = 4;
      this.digitlimit = 9;
      this.yourCode = "0000";
    }
    this.win = false;
    this.randomCode ="";
    this.codeFound = false;
    this.largest = -5;
    this.smallest = 20;
    this.productOfDigits = 1;
    this.sumOfDigits = 0;
    for(var i=0; i<this.digits; i++){
        this.randomCode = this.randomCode+Math.ceil(Math.random()*this.digitlimit);
    }
    for(var j=0; j<this.digits; j++){
        this.sumOfDigits += parseInt(this.randomCode.substring(j,j+1));
        this.productOfDigits *= parseInt(this.randomCode.substring(j,j+1));
        if(parseInt(this.randomCode.substring(j,j+1))>this.largest){
          this.largest = parseInt(this.randomCode.substring(j,j+1));
          this.largestPos = j+1;
        }
        if(parseInt(this.randomCode.substring(j,j+1))<this.smallest){
          this.smallest = parseInt(this.randomCode.substring(j,j+1));
          this.smallestPos = j+1;
        }
    }
    console.log(this.randomCode);
      this.timeleft = 60;
      this.timeup = false;
      setInterval(()=>{
          if(this.win==true){
            this.timeleft++;
          }
          if(this.timeup==false){
          this.timeleft--;
          if(this.timeleft<=10){
            this.color="red";
          }
          if(this.timeleft==0 && this.timeleft!=null){
            this.navCtrl.push(GameOverPage);

          }

          }
      },1000);
    }
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad ButtonsPage');
    if(this.navParams.data.wins[2]["Buttons"]==false){
    let a = this.alertCtrl.create({
       title: "Babe! Enter the correct code",
       message : `<img src="assets/pandashortened.gif">`,
       buttons : [{text: "OK", role : "OK"}]
     });
     a.present();
   }
  }
  ButtonValue(number){
     if(this.yourCode.length<3){
        this.yourCode = this.yourCode+number;
        if(this.yourCode==this.randomCode){
          this.win = true;
            let alert = this.alertCtrl.create({
                title : "Congrats Nitya!",
                message : `<img src="assets/pandashortened.gif"><div>You win level 3! The third part of your code is : ${this.partofcode}</div>`,
                buttons : [{
                      text : 'OK',
                      role : 'OK',
                      handler : () =>{
                        this.mykeys.push("BoredKey");
                        this.wins[2]["Buttons"] = true;
                        this.navCtrl.push(MainRoomPage, {mykeys : this.mykeys, gamewinningcode : this.navParams.data.gamewinningcode, wins : this.wins, difficulty: this.navParams.data.difficulty});
                      }
                }],
            enableBackdropDismiss : false
            });
            alert.present();
            this.codeFound = true;
        }
        else{
          let al = this.alertCtrl.create({
            title : "Oops",
            message : "Incorrect Code",
            buttons : [{
              text : "OK",
              role : "OK",
            }]
          })
        }
        console.log(this.yourCode);
     }
     else{
        this.yourCode=""+number;
        console.log(this.yourCode);
     }
  }
  correctAnswer(){
    console.log(this.option);
    if(this.option==="None of the below"){
        let al = this.alertCtrl.create({
            message : "Correct Answer"
        });
        al.present();
    }
    else{
        let a = this.alertCtrl.create({
            message : "Wrong"
        });
        a.present();
    }
  }
  ionViewDidLeave(){
    this.timeleft = null;
  }
}
*/
var buttons_ButtonsPage = (function () {
    function ButtonsPage(navCtrl, navParams, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.partofcode = this.navParams.data.gamewinningcode.substring(4, 6);
        this.mykeys = this.navParams.data.mykeys;
        this.wins = this.navParams.data.wins;
        if (this.navParams.data.wins[2]["Buttons"] == true) {
            var alert_1 = this.alertCtrl.create({
                title: "Congrats!",
                message: "<img src=\"assets/pandashortened.gif\"><div>You win level 3! The third part of your code is : " + this.partofcode + "</div>",
                buttons: [{
                        text: 'OK',
                        role: 'OK',
                        handler: function () {
                            _this.wins[2]["Buttons"] = true;
                            _this.navCtrl.push(main_room_MainRoomPage, { mykeys: _this.mykeys, gamewinningcode: _this.navParams.data.gamewinningcode, wins: _this.wins, difficulty: _this.navParams.data.difficulty });
                        }
                    }],
                enableBackdropDismiss: false
            });
            alert_1.present();
        }
        else {
            if (this.navParams.data.difficulty === "Easy") {
                this.digits = 3;
                this.digitlimit = 6;
                this.yourCode = "000";
            }
            if (this.navParams.data.difficulty === "Medium") {
                this.digits = 3;
                this.digitlimit = 9;
                this.yourCode = "000";
            }
            if (this.navParams.data.difficulty === "Hard") {
                this.digits = 4;
                this.digitlimit = 9;
                this.yourCode = "0000";
            }
            this.win = false;
            this.randomCode = "";
            this.codeFound = false;
            this.largest = -5;
            this.smallest = 20;
            this.productOfDigits = 1;
            this.sumOfDigits = 0;
            for (var i = 0; i < this.digits; i++) {
                this.randomCode = this.randomCode + Math.ceil(Math.random() * this.digitlimit);
            }
            for (var j = 0; j < this.digits; j++) {
                this.sumOfDigits += parseInt(this.randomCode.substring(j, j + 1));
                this.productOfDigits *= parseInt(this.randomCode.substring(j, j + 1));
                if (parseInt(this.randomCode.substring(j, j + 1)) > this.largest) {
                    this.largest = parseInt(this.randomCode.substring(j, j + 1));
                    this.largestPos = j + 1;
                }
                if (parseInt(this.randomCode.substring(j, j + 1)) < this.smallest) {
                    this.smallest = parseInt(this.randomCode.substring(j, j + 1));
                    this.smallestPos = j + 1;
                }
            }
            console.log(this.randomCode);
            this.timeleft = 60;
            this.timeup = false;
            setInterval(function () {
                if (_this.win == true) {
                    _this.timeleft++;
                }
                if (_this.timeup == false) {
                    _this.timeleft--;
                    if (_this.timeleft <= 10) {
                        _this.color = "red";
                    }
                    if (_this.timeleft == 0) {
                        _this.navCtrl.push(game_over_GameOverPage);
                    }
                }
            }, 1000);
        }
    }
    ButtonsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ButtonsPage');
        if (this.navParams.data.wins[2]["Buttons"] == false) {
            var a = this.alertCtrl.create({
                title: "Enter the correct code",
                message: "<img src=\"assets/pandashortened.gif\">",
                buttons: [{ text: "OK", role: "OK" }]
            });
            a.present();
        }
    };
    ButtonsPage.prototype.ButtonValue = function (number) {
        var _this = this;
        if (this.yourCode.length < 3) {
            this.yourCode = this.yourCode + number;
            if (this.yourCode == this.randomCode) {
                this.win = true;
                var alert_2 = this.alertCtrl.create({
                    title: "Congrats!",
                    message: "<img src=\"assets/pandashortened.gif\"><div>You win level 3! The third part of your code is : " + this.partofcode + "</div>",
                    buttons: [{
                            text: 'OK',
                            role: 'OK',
                            handler: function () {
                                _this.mykeys.push("BoredKey");
                                _this.wins[2]["Buttons"] = true;
                                _this.navCtrl.push(main_room_MainRoomPage, { mykeys: _this.mykeys, gamewinningcode: _this.navParams.data.gamewinningcode, wins: _this.wins, difficulty: _this.navParams.data.difficulty });
                            }
                        }],
                    enableBackdropDismiss: false
                });
                alert_2.present();
                this.codeFound = true;
            }
            else {
                var al = this.alertCtrl.create({
                    title: "Oops",
                    message: "Incorrect Code",
                    buttons: [{
                            text: "OK",
                            role: "OK",
                        }]
                });
            }
            console.log(this.yourCode);
        }
        else {
            this.yourCode = "" + number;
            console.log(this.yourCode);
        }
    };
    ButtonsPage.prototype.correctAnswer = function () {
        console.log(this.option);
        if (this.option === "None of the below") {
            var al = this.alertCtrl.create({
                message: "Correct Answer"
            });
            al.present();
        }
        else {
            var a = this.alertCtrl.create({
                message: "Wrong"
            });
            a.present();
        }
    };
    return ButtonsPage;
}());
buttons_ButtonsPage = buttons___decorate([
    buttons___WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */]({
        selector: 'page-buttons',template:/*ion-inline-start:"C:\Users\Sidharthramanan\Documents\Sublime Text 3\Projects\Game\src\pages\buttons\buttons.html"*/'<!--\n  Generated template for the ButtonsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<style>\n .bgimg {\n  background-image : url(\'assets/buttonsbg.jpg\');\n  background-repeat: no-repeat;\n  background-size: cover;\n }\n</style> \n<ion-header>\n\n  <ion-navbar hideBackButton>\n    <p [style.color]="color" style="text-align:center; font-weight:bold; font-size:30px">Time left : {{timeleft}}</p>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bgimg">\n  <div style="padding-left:25%">\n  <ion-row>\n  <button ion-button large (click)="ButtonValue(\'1\')">1</button>\n  <button ion-button large color="danger" (click)="ButtonValue(\'2\')">2</button>\n  <button ion-button large (click)="ButtonValue(\'3\')">3</button>\n  </ion-row>\n  <ion-row>\n  <button ion-button large color="danger" (click)="ButtonValue(\'4\')">4</button>\n  <button ion-button large (click)="ButtonValue(\'5\')">5</button>\n  <button ion-button large color="danger" (click)="ButtonValue(\'6\')">6</button>\n  </ion-row>\n  <ion-row>\n     <button ion-button large (click)="ButtonValue(\'7\')">7</button>\n     <button ion-button large color="danger" (click)="ButtonValue(\'8\')">8</button>\n     <button ion-button large  (click)="ButtonValue(\'9\')">9</button>\n  </ion-row>\n  </div>\n  <div style="padding-left:10px">\n  <ion-card>\n    <p style="font-weight:bold; font-size:15px; text-align:center">{{yourCode}}</p>\n  </ion-card>\n  </div>\n  <div>\n    <p style="font-weight:bold; font-size:30px">Hints</p>\n    <p style="font-weight:bold; color:white">Sum of digits : {{sumOfDigits}}</p>\n    <p style="font-weight:bold; color:white">Product of digits : {{productOfDigits}}</p>\n    <p style="font-weight:bold; color:white">Position of largest digit : {{largestPos}}</p>\n    <p style="font-weight:bold; color:white">Position of smallest digit : {{smallestPos}}</p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Sidharthramanan\Documents\Sublime Text 3\Projects\Game\src\pages\buttons\buttons.html"*/,
    }),
    buttons___metadata("design:paramtypes", [buttons___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], buttons___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], buttons___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], buttons_ButtonsPage);

//# sourceMappingURL=buttons.js.map
// CONCATENATED MODULE: ./src/pages/bored-button/bored-button.ts
/* harmony import */ var bored_button___WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var bored_button___WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var bored_button___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var bored_button___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the BoredButtonPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var bored_button_BoredButtonPage = (function () {
    function BoredButtonPage(navCtrl, navParams, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.wins = this.navParams.data.wins;
        this.mykeys = this.navParams.data.mykeys;
        this.partofcode = this.navParams.data.gamewinningcode.substring(6, 8);
        if (this.navParams.data.wins[3]["Bored"] == true) {
            var alert_1 = this.alertCtrl.create({
                title: 'Congrats!',
                message: "<img src=\"assets/pandashortened.gif\"><div>You win level 4! The final part of your code is : " + this.partofcode + "</div>",
                buttons: [{
                        text: "OK",
                        role: "OK",
                        handler: function () {
                            _this.wins[3]["Bored"] = true;
                            _this.navCtrl.push(main_room_MainRoomPage, { mykeys: _this.mykeys, gamewinningcode: _this.navParams.data.gamewinningcode, wins: _this.wins, difficulty: _this.navParams.data.difficulty });
                        }
                    }],
                enableBackdropDismiss: false
            });
            alert_1.present();
        }
        else {
            if (this.navParams.data.difficulty === "Easy") {
                this.clickgoal = 50;
            }
            if (this.navParams.data.difficulty === "Medium") {
                this.clickgoal = 60;
            }
            if (this.navParams.data.difficulty === "Hard") {
                this.clickgoal = 75;
            }
            this.win = false;
            this.clicks = 0;
            this.timeleft = 10;
            this.timeup = false;
            setInterval(function () {
                if (_this.timeup == false) {
                    if (_this.win == true) {
                        _this.timeleft = null;
                    }
                    _this.timeleft--;
                    if (_this.timeleft == 0) {
                        _this.timeup = true;
                        if (_this.clicks >= _this.clickgoal) {
                            _this.win = true;
                            _this.timeleft = null;
                            var alert_2 = _this.alertCtrl.create({
                                title: 'Congrats!',
                                message: "<img src=\"assets/pandashortened.gif\"><div>You win level 4! The final part of your code is : " + _this.partofcode + "</div>",
                                buttons: [{
                                        text: "OK",
                                        role: "OK",
                                        handler: function () {
                                            _this.wins[3]["Bored"] = true;
                                            _this.navCtrl.push(main_room_MainRoomPage, { mykeys: _this.mykeys, gamewinningcode: _this.navParams.data.gamewinningcode, wins: _this.wins, difficulty: _this.navParams.data.difficulty });
                                        }
                                    }],
                                enableBackdropDismiss: false
                            });
                            alert_2.present();
                        }
                        else if (_this.clicks < _this.clickgoal) {
                            _this.navCtrl.push(game_over_GameOverPage);
                        }
                    }
                }
            }, 1000);
        }
    }
    BoredButtonPage.prototype.ionViewDidLeave = function () {
        this.timeleft = null;
    };
    BoredButtonPage.prototype.Click = function () {
        if (this.timeup == false) {
            this.clicks++;
        }
    };
    return BoredButtonPage;
}());
bored_button_BoredButtonPage = bored_button___decorate([
    bored_button___WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */]({
        selector: 'page-bored-button',template:/*ion-inline-start:"C:\Users\Sidharthramanan\Documents\Sublime Text 3\Projects\Game\src\pages\bored-button\bored-button.html"*/'<!--\n  Generated template for the BoredButtonPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<style>\n .bgimg {\n 	background-image : url(\'assets/boredbg.jpg\');\n 	background-repeat: no-repeat;\n 	background-size: cover;\n }\n</style> \n<ion-header>\n\n  <ion-navbar hideBackButton>\n     <p style="font-weight:bold; text-align:right; font-size:30px;color:red">Time left : {{timeleft}}</p>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bgimg">\n <div style="padding-left:20%; padding-top:25%">\n    <ion-row>\n     <button ion-button color="light" (click)="Click()">You</button>\n     <button ion-button color="danger"(click)="Click()">Know</button>\n     <button ion-button (click)="Click()">What to do</button>\n    </ion-row>\n    <ion-row>\n     <button ion-button color="dark" (click)="Click()">Just</button>\n     <button ion-button color="danger"(click)="Click()">Click</button>\n     <button ion-button (click)="Click()">As</button>\n    </ion-row>\n    <ion-row>\n     <button ion-button color="dark"(click)="Click()">Fast</button>\n     <button ion-button color="light"(click)="Click()">As</button>\n     <button ion-button (click)="Click()">You Can</button>\n    </ion-row>\n </div>\n    <p align="center" style="font-weight: bold; font-size:30px">{{clicks}} : clicks</p>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Sidharthramanan\Documents\Sublime Text 3\Projects\Game\src\pages\bored-button\bored-button.html"*/,
    }),
    bored_button___metadata("design:paramtypes", [bored_button___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], bored_button___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], bored_button___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], bored_button_BoredButtonPage);

//# sourceMappingURL=bored-button.js.map
// CONCATENATED MODULE: ./src/pages/main-room/main-room.ts
/* harmony import */ var main_room___WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var main_room___WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var main_room___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var main_room___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the MainRoomPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var main_room_MainRoomPage = (function () {
    function MainRoomPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.gamewinningcode = "";
        this.wins = [{ "MockingButton": false }, { "Slides": false }, { "Buttons": false }, { "Bored": false }];
        if (this.navParams.data.gamewinningcode) {
            this.gamewinningcode = this.navParams.data.gamewinningcode;
        }
        if (this.navParams.data.wins) {
            this.wins = this.navParams.data.wins;
        }
        else {
            for (var i = 0; i < 8; i++) {
                this.gamewinningcode += Math.ceil(Math.random() * 9);
            }
        }
        console.log(this.gamewinningcode, ": the game winning code");
        console.log(this.wins);
        if (this.navParams.data.mykeys) {
            this.mykeys = this.navParams.data.mykeys;
            this.numkeys = this.mykeys.length;
        }
        else if (this.navParams.data.playingagain == true) {
            this.mykeys = ["HomeKey"];
            this.numkeys = this.mykeys.length;
        }
        else {
            this.mykeys = ["HomeKey"];
            this.numkeys = this.mykeys.length;
        }
    }
    MainRoomPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MainRoomPage');
    };
    MainRoomPage.prototype.goToHome = function () {
        var found = false;
        for (var i = 0; i < this.mykeys.length; i++) {
            if (this.mykeys[i] == "HomeKey") {
                found = true;
            }
        }
        if (found == true) {
            this.navCtrl.push(home_HomePage, { mykeys: this.mykeys, gamewinningcode: this.gamewinningcode, wins: this.wins, difficulty: this.navParams.data.difficulty });
        }
        if (found == false) {
            var a = this.alertCtrl.create({
                title: "Oops",
                message: "You don't have the key to unlock this chest",
                buttons: [{ text: "OK", role: "OK" }]
            });
            a.present();
        }
    };
    MainRoomPage.prototype.goToButtons = function () {
        var found = false;
        for (var i = 0; i < this.mykeys.length; i++) {
            if (this.mykeys[i] == "ButtonsKey") {
                found = true;
            }
        }
        if (found == true) {
            this.navCtrl.push(buttons_ButtonsPage, { mykeys: this.mykeys, gamewinningcode: this.gamewinningcode, wins: this.wins, difficulty: this.navParams.data.difficulty });
        }
        if (found == false) {
            var a = this.alertCtrl.create({
                title: "Oops",
                message: "You don't have the key to unlock this chest",
                buttons: [{ text: "OK", role: "OK" }]
            });
            a.present();
        }
    };
    MainRoomPage.prototype.goToSlides = function () {
        var found = false;
        for (var i = 0; i < this.mykeys.length; i++) {
            if (this.mykeys[i] == "SlidesKey") {
                found = true;
            }
        }
        if (found == true) {
            this.navCtrl.push(slides_SlidesPage, { mykeys: this.mykeys, gamewinningcode: this.gamewinningcode, wins: this.wins, difficulty: this.navParams.data.difficulty });
        }
        if (found == false) {
            var a = this.alertCtrl.create({
                title: "Oops",
                message: "You don't have the key to unlock this chest",
                buttons: [{ text: "OK", role: "OK" }]
            });
            a.present();
        }
    };
    MainRoomPage.prototype.goToBoredButton = function () {
        var found = false;
        for (var i = 0; i < this.mykeys.length; i++) {
            if (this.mykeys[i] == "BoredKey") {
                found = true;
            }
        }
        if (found == true) {
            this.navCtrl.push(bored_button_BoredButtonPage, { mykeys: this.mykeys, gamewinningcode: this.gamewinningcode, wins: this.wins, difficulty: this.navParams.data.difficulty });
        }
        if (found == false) {
            var a = this.alertCtrl.create({
                title: "Oops",
                message: "You don't have the key to unlock this chest",
                buttons: [{ text: "OK", role: "OK" }]
            });
            a.present();
        }
    };
    MainRoomPage.prototype.EnterCode = function () {
        this.navCtrl.push(enter_code_EnterCodePage, { mykeys: this.mykeys, gamewinningcode: this.gamewinningcode });
    };
    return MainRoomPage;
}());
main_room_MainRoomPage = main_room___decorate([
    main_room___WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */]({
        selector: 'page-main-room',template:/*ion-inline-start:"C:\Users\Sidharthramanan\Documents\Sublime Text 3\Projects\Game\src\pages\main-room\main-room.html"*/' Generated template for the MainRoomPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n <style>\n .bgimg {\n 	background-image : url(\'assets/main copy.png\');\n 	background-repeat: no-repeat;\n 	background-size: cover;\n }\n</style> \n\n\n<ion-header>\n\n  <ion-navbar hideBackButton>\n    <div style="padding-left:30%">\n    <p style="float:right; font-weight:bold"> : {{numkeys}}</p>\n    <img src="assets/key.jpg" style="width:18%; height:8%; float:right">\n    </div>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bgimg">\n<div style="padding-top:58%; padding-left:10%; margin-top:0%; margin-bottom:0%">\n<ion-row>\n <img src="assets/Panda sitting 1.png" style="width:35%; height:20%; margin-top:30%; margin-right:20%">\n <img src="assets/doorlocked.png" style="width:9%; height:10%; margin-right:3%" (click)="EnterCode()">\n <img src="assets/whitedoor.png" style="width:28%; height:25%">\n</ion-row>\n<ion-row>\n<div style="padding-bottom:25px"></div>\n <img src="assets/treasure.png" style="width:23%; height:13%; margin-left:22%" (click)="goToHome()">\n <img src="assets/treasure.png" style="width:23%; height:13%" (click)="goToSlides()">\n</ion-row>\n<ion-row>\n <img src="assets/treasure.png" style="width:23%; height:13%; margin-left:22%" (click)="goToButtons()">\n <img src="assets/treasure.png" style="width:23%; height:13%" (click)="goToBoredButton()">\n</ion-row>\n</div>\n\n</ion-content>\n\n<!-- <style>\n .bgimg {\n 	background-image : url(\'assets/main.jpg\');\n 	background-repeat: no-repeat;\n 	background-size: cover;\n 	position :  relative;\n }\n</style> \n\n\n<ion-header>\n\n  <ion-navbar hideBackButton>\n    <div style="padding-left:150px">\n    <img src="assets/key.jpg" style="width:50px; height:50px; float:left">\n    <p style="float:left; font-weight:bold"> : {{numkeys}}</p>\n    </div>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bgimg">\n <img src="assets/EnterCode.png" style="width:30px; height:50px; position : absolute; top:20%; left:50%" (click)="EnterCode()">\n <img src="assets/door.jpg" style="width:90px; height:150px; position : absolute; top:20%; left : 70%">\n <img src="assets/treasure.png" style="width:75px; height:75px; position : absolute; top : 40%; left:30%" (click)="goToHome()">\n <img src="assets/treasure.png" style="width:75px; height:75px; position : absolute; top : 40%; left:50%" (click)="goToSlides()">\n <img src="assets/treasure.png" style="width:75px; height:75px; position : absolute; top : 60%; left : 30%" (click)="goToButtons()">\n <img src="assets/treasure.png" style="width:75px; height:75px; position : absolute; top : 60%; left : 50%" (click)="goToBoredButton()">\n</ion-content>\n -->\n'/*ion-inline-end:"C:\Users\Sidharthramanan\Documents\Sublime Text 3\Projects\Game\src\pages\main-room\main-room.html"*/,
    }),
    main_room___metadata("design:paramtypes", [main_room___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], main_room___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], main_room___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], main_room_MainRoomPage);

//# sourceMappingURL=main-room.js.map
// CONCATENATED MODULE: ./src/pages/choose-level/choose-level.ts
/* harmony import */ var choose_level___WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var choose_level___WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var choose_level___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var choose_level___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ChooseLevelPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var choose_level_ChooseLevelPage = (function () {
    function ChooseLevelPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ChooseLevelPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChooseLevelPage');
    };
    ChooseLevelPage.prototype.Easy = function () {
        this.navCtrl.push(main_room_MainRoomPage, { difficulty: "Easy" });
    };
    ChooseLevelPage.prototype.Medium = function () {
        this.navCtrl.push(main_room_MainRoomPage, { difficulty: "Medium" });
    };
    ChooseLevelPage.prototype.Hard = function () {
        this.navCtrl.push(main_room_MainRoomPage, { difficulty: "Hard" });
    };
    return ChooseLevelPage;
}());
choose_level_ChooseLevelPage = choose_level___decorate([
    choose_level___WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */]({
        selector: 'page-choose-level',template:/*ion-inline-start:"C:\Users\Sidharthramanan\Documents\Sublime Text 3\Projects\Game\src\pages\choose-level\choose-level.html"*/'<!--\n  Generated template for the ChooseLevelPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<style>\n .bgimg {\n  background-image : url(\'assets/level.jpg\');\n  background-repeat: no-repeat;\n  background-size: cover;\n }\n</style> \n<ion-header>\n\n  <ion-navbar>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bgimg">\n   <p style="font-weight:bold;font-size:40px; color:white; font-family:courier; text-align:center; margin-bottom:50%">Choose A Level</p>\n   <ion-row>\n   <button ion-button full color="light" (click)="Easy()">Easy</button>\n   </ion-row>\n   <ion-row>\n   <button ion-button full style="clear:left" scolor="dark" (click)="Medium()">Medium</button>\n   </ion-row>\n   <ion-row>\n   <button ion-button full style="clear:left" color="danger" (click)="Hard()">Hard</button>\n   </ion-row>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Sidharthramanan\Documents\Sublime Text 3\Projects\Game\src\pages\choose-level\choose-level.html"*/,
    }),
    choose_level___metadata("design:paramtypes", [choose_level___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], choose_level___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], choose_level_ChooseLevelPage);

//# sourceMappingURL=choose-level.js.map
// CONCATENATED MODULE: ./src/pages/instructions/instructions.ts
/* harmony import */ var instructions___WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var instructions___WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var instructions___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var instructions___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the InstructionsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var InstructionsPage = (function () {
    function InstructionsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    InstructionsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InstructionsPage');
    };
    return InstructionsPage;
}());
InstructionsPage = instructions___decorate([
    instructions___WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */]({
        selector: 'page-instructions',template:/*ion-inline-start:"C:\Users\Sidharthramanan\Documents\Sublime Text 3\Projects\Game\src\pages\instructions\instructions.html"*/'<!--\n  Generated template for the InstructionsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<style>\n .bgimg {\n 	background-image : url(\'assets/instructionsbg.jpg\');\n 	background-repeat: no-repeat;\n 	background-size: cover;\n }\n</style> \n<ion-header>\n\n  <ion-navbar>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bgimg">\n  <ion-card>\n   <ion-card-header><p style="font-weight: bold; font-size:40px">How to Play</p></ion-card-header>\n   <ion-card-content>\n<p style="color:blue; font-family:courier">\nOh no! You\'ve been trapped in a room with a poor panda with no escape but to enter the right code to open the door! \nThe good news is that there are 4 puzzles you have to complete to get the code. These puzzles will test your reflexes, accuracy, memory, speed and mathematical reasoning. Use your keys to open the chest and start a puzzle. But remember : If you run out of time with the puzzle, its GAME OVER. Please save the panda! He\'s hungry!\n  </p>\n\n   </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Sidharthramanan\Documents\Sublime Text 3\Projects\Game\src\pages\instructions\instructions.html"*/,
    }),
    instructions___metadata("design:paramtypes", [instructions___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], instructions___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], InstructionsPage);

//# sourceMappingURL=instructions.js.map
// CONCATENATED MODULE: ./src/pages/start-game/start-game.ts
/* harmony import */ var start_game___WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var start_game___WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var start_game___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var start_game___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var start_game_StartGamePage = (function () {
    function StartGamePage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    StartGamePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StartGamePage');
    };
    StartGamePage.prototype.PlayGame = function () {
        this.navCtrl.push(choose_level_ChooseLevelPage);
    };
    StartGamePage.prototype.HowToPlay = function () {
        this.navCtrl.push(InstructionsPage);
    };
    return StartGamePage;
}());
start_game_StartGamePage = start_game___decorate([
    start_game___WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */]({
        selector: 'page-start-game',template:/*ion-inline-start:"C:\Users\Sidharthramanan\Documents\Sublime Text 3\Projects\Game\src\pages\start-game\start-game.html"*/'<!--\n  Generated template for the StartGamePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<style>\n .bgimg {\n  background-image : url(\'assets/blackandwhitespots.jpg\');\n  background-repeat: no-repeat;\n  background-size: cover;\n }\n</style> \n<ion-header>\n\n  <ion-navbar hideBackButton>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bgimg">\n  <p style="font-size:60px; margin-top:5%; margin-bottom:5%;font-weight:bold; font-family:courier; color:black; text-align:center">Panda</p>\n  <p style="font-size:60px; margin-top:5%; margin-bottom:5%;font-weight:bold; font-family:courier; color:black; text-align:center">Escape</p>\n  <p style="text-align:center"><img src="assets/pandalogo2.jpg" style="width:50%; height:30%"></p>\n  <div>\n  <button ion-button full color="light" (click)="PlayGame()">Play Game</button>\n  <button ion-button full color="danger" (click)="HowToPlay()">Instructions</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Sidharthramanan\Documents\Sublime Text 3\Projects\Game\src\pages\start-game\start-game.html"*/,
    }),
    start_game___metadata("design:paramtypes", [start_game___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], start_game___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], start_game___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], start_game_StartGamePage);

//# sourceMappingURL=start-game.js.map
// CONCATENATED MODULE: ./src/pages/waving-panda/waving-panda.ts
/* harmony import */ var waving_panda___WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var waving_panda___WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var waving_panda___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var waving_panda___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the WavingPandaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var waving_panda_WavingPandaPage = (function () {
    function WavingPandaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this;
    }
    WavingPandaPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        setTimeout(function () {
            _this.navCtrl.push(start_game_StartGamePage);
        }, 2000);
    };
    return WavingPandaPage;
}());
waving_panda_WavingPandaPage = waving_panda___decorate([
    waving_panda___WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */]({
        selector: 'page-waving-panda',template:/*ion-inline-start:"C:\Users\Sidharthramanan\Documents\Sublime Text 3\Projects\Game\src\pages\waving-panda\waving-panda.html"*/'<!--\n  Generated template for the WavingPandaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <img src="assets/panda.gif" style="width:100%; height:95%">\n</ion-content>\n'/*ion-inline-end:"C:\Users\Sidharthramanan\Documents\Sublime Text 3\Projects\Game\src\pages\waving-panda\waving-panda.html"*/,
    }),
    waving_panda___metadata("design:paramtypes", [waving_panda___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], waving_panda___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], waving_panda_WavingPandaPage);

//# sourceMappingURL=waving-panda.js.map
// CONCATENATED MODULE: ./src/app/app.component.ts
/* harmony import */ var app_component___WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var app_component___WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(25);
var app_component___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var app_component___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var app_component_MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, alertCtrl) {
        this.alertCtrl = alertCtrl;
        this.rootPage = waving_panda_WavingPandaPage;
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
app_component_MyApp = app_component___decorate([
    app_component___WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */]({template:/*ion-inline-start:"C:\Users\Sidharthramanan\Documents\Sublime Text 3\Projects\Game\src\app\app.html"*/'<ion-nav [root]="rootPage">\n	\n</ion-nav>\n\n'/*ion-inline-end:"C:\Users\Sidharthramanan\Documents\Sublime Text 3\Projects\Game\src\app\app.html"*/
    }),
    app_component___metadata("design:paramtypes", [app_component___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], app_component___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], app_component_MyApp);

//# sourceMappingURL=app.component.js.map
// CONCATENATED MODULE: ./src/pages/marquee/marquee.ts
/* harmony import */ var marquee___WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var marquee___WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var marquee___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var marquee___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MarqueePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MarqueePage = (function () {
    function MarqueePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.y = Math.ceil(Math.random() * 3);
        console.log(this.y + " is the index chosen");
    }
    MarqueePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MarqueePage');
    };
    MarqueePage.prototype.checkImage = function (n) {
        if (n == this.y) {
            console.log(n + " is the right image");
        }
    };
    return MarqueePage;
}());
MarqueePage = marquee___decorate([
    marquee___WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */]({
        selector: 'page-marquee',template:/*ion-inline-start:"C:\Users\Sidharthramanan\Documents\Sublime Text 3\Projects\Game\src\pages\marquee\marquee.html"*/'<!--\n  Generated template for the MarqueePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Marquee</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n <MARQUEE scrollamount="500" style="padding: 0px; margin-right:0px; margin-left:0px; border:0px">\n        <img src="assets/ay.JPG" (click)="checkImage(1)">\n        <img src="assets/bay.png" (click)="checkImage(2)">\n        <img src="assets/bay.png" (click)="checkImage(3)">\n </MARQUEE>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Sidharthramanan\Documents\Sublime Text 3\Projects\Game\src\pages\marquee\marquee.html"*/,
    }),
    marquee___metadata("design:paramtypes", [marquee___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], marquee___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], MarqueePage);

//# sourceMappingURL=marquee.js.map
// CONCATENATED MODULE: ./src/app/app.module.ts
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var app_module___WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(27);
var app_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = app_module___decorate([
    __WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */]({
        declarations: [
            app_component_MyApp,
            home_HomePage,
            slides_SlidesPage,
            buttons_ButtonsPage,
            MarqueePage,
            main_room_MainRoomPage,
            bored_button_BoredButtonPage,
            start_game_StartGamePage,
            InstructionsPage,
            enter_code_EnterCodePage,
            choose_level_ChooseLevelPage,
            you_win_YouWinPage,
            game_over_GameOverPage,
            waving_panda_WavingPandaPage
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(app_component_MyApp)
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            app_component_MyApp,
            home_HomePage,
            slides_SlidesPage,
            buttons_ButtonsPage,
            MarqueePage,
            main_room_MainRoomPage,
            bored_button_BoredButtonPage,
            start_game_StartGamePage,
            InstructionsPage,
            enter_code_EnterCodePage,
            choose_level_ChooseLevelPage,
            you_win_YouWinPage,
            game_over_GameOverPage,
            waving_panda_WavingPandaPage
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            app_module___WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map
// CONCATENATED MODULE: ./src/app/main.ts
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(29);


__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */]().bootstrapModule(AppModule);
//# sourceMappingURL=main.js.map

/***/ })

},[28]);
//# sourceMappingURL=main.js.map