/*
	NAME: Tribal Wars Scripts Library
	VERSION: 0.2.8 (beta version)
	LAST UPDATED AT: 2021-09-30
	AUTHOR: RedAlert (RedAlert#9859)
	AUTHOR URL: https://twscripts.dev/
	CONTRIBUTORS: Shinko to Kuma & Sass
	HELP: #
	STATUS: Work in progress. Not finished 100%.

	This software is provided 'as-is', without any express or implied warranty.
	In no event will the author/s be held liable for any damages arising from the use of this software.
	It is not allowed to clone, rehost, re-distribute and all other forms of copying this code without permission from the author/s.
	This notice may not be removed or altered from any source distribution.
 */

if (typeof window.twSDK === 'undefined') {
	window.twSDK = {
		// variables
		scriptData: {},
		translations: {},
		allowedMarkets: [],
		allowedScreens: [],
		allowedModes: [],
		isDebug: false,
		enableCountApi: false,
		// helper variables
		market: game_data.market,
		units: game_data.units,
		buildings: game_data.village.buildings,
		coordsRegex: /[0-9]{3}\|[0-9]{3}/g,
		worldInfoInterface: '/interface.php?func=get_config',
		unitInfoInterface: '/interface.php?func=get_unit_info',
		buildingInfoInterface: '/interface.php?func=get_building_info',
		worldDataVillages: 'map/village.txt',
		worldDataPlayers: 'map/player.txt',
		worldDataTribes: 'map/ally.txt',
		buildingPoints: {
			Headquarters: [
				'10',
				'2',
				'2',
				'3',
				'4',
				'4',
				'5',
				'6',
				'7',
				'9',
				'10',
				'12',
				'15',
				'18',
				'21',
				'26',
				'31',
				'37',
				'44',
				'53',
				'64',
				'77',
				'92',
				'110',
				'133',
				'159',
				'191',
				'229',
				'274',
				'330',
			],
			Barracks: [
				'16',
				'3',
				'4',
				'5',
				'5',
				'7',
				'8',
				'9',
				'12',
				'14',
				'16',
				'20',
				'24',
				'28',
				'34',
				'42',
				'49',
				'59',
				'71',
				'85',
				'102',
				'123',
				'147',
				'177',
				'212',
			],
			Stable: [
				'20',
				'4',
				'5',
				'6',
				'6',
				'9',
				'10',
				'12',
				'14',
				'17',
				'21',
				'25',
				'29',
				'36',
				'43',
				'51',
				'62',
				'74',
				'88',
				'107',
			],
			Garage: ['24', '5', '6', '6', '9', '10', '12', '14', '17', '21', '25', '29', '36', '43', '51'],
			Church: ['10', '2', '2'],
			'First Church': ['10'],
			'Watch Tower': [
				'42',
				'8',
				'10',
				'13',
				'14',
				'18',
				'20',
				'25',
				'31',
				'36',
				'43',
				'52',
				'62',
				'75',
				'90',
				'108',
				'130',
				'155',
				'186',
				'224',
			],
			Academy: ['512'],
			Smithy: [
				'19',
				'4',
				'4',
				'6',
				'6',
				'8',
				'10',
				'11',
				'14',
				'16',
				'20',
				'23',
				'28',
				'34',
				'41',
				'49',
				'58',
				'71',
				'84',
				'101',
			],
			Place: ['0'],
			Statue: ['24'],
			Market: [
				'10',
				'2',
				'2',
				'3',
				'4',
				'4',
				'5',
				'6',
				'7',
				'9',
				'10',
				'12',
				'15',
				'18',
				'21',
				'26',
				'31',
				'37',
				'44',
				'53',
				'64',
				'77',
				'92',
				'110',
				'133',
			],
			'Timber camp': [
				'6',
				'1',
				'2',
				'1',
				'2',
				'3',
				'3',
				'3',
				'5',
				'5',
				'6',
				'8',
				'8',
				'11',
				'13',
				'15',
				'19',
				'22',
				'27',
				'32',
				'38',
				'46',
				'55',
				'66',
				'80',
				'95',
				'115',
				'137',
				'165',
				'198',
			],
			'Clay pit': [
				'6',
				'1',
				'2',
				'1',
				'2',
				'3',
				'3',
				'3',
				'5',
				'5',
				'6',
				'8',
				'8',
				'11',
				'13',
				'15',
				'19',
				'22',
				'27',
				'32',
				'38',
				'46',
				'55',
				'66',
				'80',
				'95',
				'115',
				'137',
				'165',
				'198',
			],
			'Iron mine': [
				'6',
				'1',
				'2',
				'1',
				'2',
				'3',
				'3',
				'3',
				'5',
				'5',
				'6',
				'8',
				'8',
				'11',
				'13',
				'15',
				'19',
				'22',
				'27',
				'32',
				'38',
				'46',
				'55',
				'66',
				'80',
				'95',
				'115',
				'137',
				'165',
				'198',
			],
			Farm: [
				'5',
				'1',
				'1',
				'2',
				'1',
				'2',
				'3',
				'3',
				'3',
				'5',
				'5',
				'6',
				'8',
				'8',
				'11',
				'13',
				'15',
				'19',
				'22',
				'27',
				'32',
				'38',
				'46',
				'55',
				'66',
				'80',
				'95',
				'115',
				'137',
				'165',
			],
			Warehouse: [
				'6',
				'1',
				'2',
				'1',
				'2',
				'3',
				'3',
				'3',
				'5',
				'5',
				'6',
				'8',
				'8',
				'11',
				'13',
				'15',
				'19',
				'22',
				'27',
				'32',
				'38',
				'46',
				'55',
				'66',
				'80',
				'95',
				'115',
				'137',
				'165',
				'198',
			],
			'Hiding place': ['5', '1', '1', '2', '1', '2', '3', '3', '3', '5'],
			Wall: [
				'8',
				'2',
				'2',
				'2',
				'3',
				'3',
				'4',
				'5',
				'5',
				'7',
				'9',
				'9',
				'12',
				'15',
				'17',
				'20',
				'25',
				'29',
				'36',
				'43',
			],
		},

		// internal methods
		_initDebug: function () {
			const scriptInfo = this.scriptInfo();
			console.debug(`${scriptInfo} It works 🚀!`);
			console.debug(`${scriptInfo} HELP:`, this.scriptData.helpLink);
			if (this.isDebug) {
				console.debug(`${scriptInfo} Market:`, game_data.market);
				console.debug(`${scriptInfo} World:`, game_data.world);
				console.debug(`${scriptInfo} Screen:`, game_data.screen);
				console.debug(`${scriptInfo} Game Version:`, game_data.majorVersion);
				console.debug(`${scriptInfo} Game Build:`, game_data.version);
				console.debug(`${scriptInfo} Locale:`, game_data.locale);
				console.debug(`${scriptInfo} Premium Account:`, game_data.features.Premium.active);
				console.debug(`${scriptInfo} Loot Assistant:`, game_data.features.FarmAssistent.active);
				console.debug(`${scriptInfo} Account Manager:`, game_data.features.AccountManager.active);
			}
		},
		_registerScript: function () {
			if (this.enableCountApi) {
				const { prefix, author } = this.scriptData;
				const scriptInfo = this.scriptInfo();
				jQuery.getJSON(`https://api.countapi.xyz/hit/${author}/${prefix}`, ({ value }) => {
					console.debug(
						`${scriptInfo} This script has been run ${this.formatAsNumber(parseInt(value))} times.`
					);
				});
			}
		},

		// public methods
		calculateCoinsNeededForNthNoble: function (noble) {
			return (noble * noble + noble) / 2;
		},
		calculateDistanceFromCurrentVillage: function (coord) {
			const x1 = game_data.village.x;
			const y1 = game_data.village.y;
			const [x2, y2] = coord.split('|');
			const deltaX = Math.abs(x1 - x2);
			const deltaY = Math.abs(y1 - y2);
			return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
		},
		calculateDistance: function (from, to) {
			const [x1, y1] = from.split('|');
			const [x2, y2] = to.split('|');
			const deltaX = Math.abs(x1 - x2);
			const deltaY = Math.abs(y1 - y2);
			return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
		},
		calculateTimesByDistance: async function (distance) {
			const _self = this;

			const times = [];
			const travelTimes = [];

			const unitInfo = await _self.getWorldUnitInfo();
			const worldConfig = await _self.getWorldConfig();

			for (let [key, value] of Object.entries(unitInfo.config)) {
				times.push(value.speed);
			}

			const { speed, unit_speed } = worldConfig.config;

			times.forEach((time) => {
				let travelTime = Math.round((distance * time * 60) / speed / unit_speed);
				travelTime = _self.secondsToHms(travelTime);
				travelTimes.push(travelTime);
			});

			return travelTimes;
		},
		checkValidLocation: function (type) {
			switch (type) {
				case 'screen':
					return this.allowedScreens.includes(this.getParameterByName('screen'));
				case 'mode':
					return this.allowedModes.includes(this.getParameterByName('mode'));
				default:
					return false;
			}
		},
		checkValidMarket: function () {
			return this.allowedMarkets.includes(this.market);
		},
		cleanString: function (string) {
			return decodeURIComponent(string).replace(/\+/g, ' ');
		},
		copyToClipboard: function (string) {
			navigator.clipboard.writeText(string);
		},
		csvToArray: function (strData, strDelimiter = ',') {
			var objPattern = new RegExp(
				'(\\' +
					strDelimiter +
					'|\\r?\\n|\\r|^)' +
					'(?:"([^"]*(?:""[^"]*)*)"|' +
					'([^"\\' +
					strDelimiter +
					'\\r\\n]*))',
				'gi'
			);
			var arrData = [[]];
			var arrMatches = null;
			while ((arrMatches = objPattern.exec(strData))) {
				var strMatchedDelimiter = arrMatches[1];
				if (strMatchedDelimiter.length && strMatchedDelimiter !== strDelimiter) {
					arrData.push([]);
				}
				var strMatchedValue;

				if (arrMatches[2]) {
					strMatchedValue = arrMatches[2].replace(new RegExp('""', 'g'), '"');
				} else {
					strMatchedValue = arrMatches[3];
				}
				arrData[arrData.length - 1].push(strMatchedValue);
			}
			return arrData;
		},
		frequencyCounter: function (array) {
			return array.reduce(function (acc, curr) {
				if (typeof acc[curr] == 'undefined') {
					acc[curr] = 1;
				} else {
					acc[curr] += 1;
				}
				return acc;
			}, {});
		},
		getAll: function (
			urls, // array of URLs
			onLoad, // called when any URL is loaded, params (index, data)
			onDone, // called when all URLs successfully loaded, no params
			onError // called when a URL load fails or if onLoad throws an exception, params (error)
		) {
			var numDone = 0;
			var lastRequestTime = 0;
			var minWaitTime = 200; // ms between requests
			loadNext();
			function loadNext() {
				if (numDone == urls.length) {
					onDone();
					return;
				}

				let now = Date.now();
				let timeElapsed = now - lastRequestTime;
				if (timeElapsed < minWaitTime) {
					let timeRemaining = minWaitTime - timeElapsed;
					setTimeout(loadNext, timeRemaining);
					return;
				}
				lastRequestTime = now;
				jQuery
					.get(urls[numDone])
					.done((data) => {
						try {
							onLoad(numDone, data);
							++numDone;
							loadNext();
						} catch (e) {
							onError(e);
						}
					})
					.fail((xhr) => {
						onError(xhr);
					});
			}
		},
		getContinentByCoord: function (coord) {
			if (!coord) return '';
			const coordParts = coord.split('|');
			return coordParts[1].charAt(0) + coordParts[0].charAt(0);
		},
		getGameFeatures: function () {
			const { Premium, FarmAssistent, AccountManager } = game_data.features;
			const isPA = Premium.active;
			const isLA = FarmAssistent.active;
			const isAM = AccountManager.active;
			return { isPA, isLA, isAM };
		},
		getEntityIdsByArrayIndex: function (chosenItems, items, index) {
			const itemIds = [];
			chosenItems.forEach((chosenItem) => {
				items.forEach((item) => {
					if (twSDK.cleanString(item[index]) === twSDK.cleanString(chosenItem)) {
						return itemIds.push(parseInt(item[0]));
					}
				});
			});
			return itemIds;
		},
		getParameterByName: function (name, url = window.location.href) {
			return new URL(url).searchParams.get(name);
		},
		getServerDateTimeObject: function () {
			const serverTime = jQuery('#serverTime').text();
			const serverDate = jQuery('#serverDate').text();
			const [day, month, year] = serverDate.split('/');
			const serverTimeFormatted = year + '-' + month + '-' + day + ' ' + serverTime;
			return new Date(serverTimeFormatted);
		},
		getBuildingsInfo: async function () {
			const TIME_INTERVAL = 60 * 60 * 1000 * 24 * 365; // fetch config only once since they don't change
			const LAST_UPDATED_TIME = localStorage.getItem('buildings_info_last_updated') ?? 0;
			let buildingsInfo = [];

			if (LAST_UPDATED_TIME !== null) {
				if (Date.parse(new Date()) >= LAST_UPDATED_TIME + TIME_INTERVAL) {
					const response = await jQuery.ajax({ url: this.buildingInfoInterface });
					unitInfo = this.xml2json(jQuery(response));
					localStorage.setItem('buildings_info', JSON.stringify(unitInfo));
					localStorage.setItem('buildings_info_last_updated', Date.parse(new Date()));
				} else {
					buildingsInfo = JSON.parse(localStorage.getItem('buildings_info'));
				}
			} else {
				const response = await jQuery.ajax({ url: this.buildingInfoInterface });
				buildingsInfo = this.xml2json(jQuery(response));
				localStorage.setItem('buildings_info', JSON.stringify(unitInfo));
				localStorage.setItem('buildings_info_last_updated', Date.parse(new Date()));
			}

			return buildingsInfo;
		},
		getWorldConfig: async function () {
			const TIME_INTERVAL = 60 * 60 * 1000 * 24 * 365; // fetch config only once since they don't change
			const LAST_UPDATED_TIME = localStorage.getItem('world_config_last_updated') ?? 0;
			let worldConfig = [];

			if (LAST_UPDATED_TIME !== null) {
				if (Date.parse(new Date()) >= LAST_UPDATED_TIME + TIME_INTERVAL) {
					const response = await jQuery.ajax({ url: this.worldInfoInterface });
					worldConfig = this.xml2json(jQuery(response));
					localStorage.setItem('world_config', JSON.stringify(worldConfig));
					localStorage.setItem('world_config_last_updated', Date.parse(new Date()));
				} else {
					worldConfig = JSON.parse(localStorage.getItem('world_config'));
				}
			} else {
				const response = await jQuery.ajax({ url: this.worldInfoInterface });
				worldConfig = this.xml2json(jQuery(response));
				localStorage.setItem('world_config', JSON.stringify(unitInfo));
				localStorage.setItem('world_config_last_updated', Date.parse(new Date()));
			}

			return worldConfig;
		},
		getWorldUnitInfo: async function () {
			const TIME_INTERVAL = 60 * 60 * 1000 * 24 * 365; // fetch config only once since they don't change
			const LAST_UPDATED_TIME = localStorage.getItem('units_info_last_updated') ?? 0;
			let unitInfo = [];

			if (LAST_UPDATED_TIME !== null) {
				if (Date.parse(new Date()) >= LAST_UPDATED_TIME + TIME_INTERVAL) {
					const response = await jQuery.ajax({ url: this.unitInfoInterface });
					unitInfo = this.xml2json(jQuery(response));
					localStorage.setItem('units_info', JSON.stringify(unitInfo));
					localStorage.setItem('units_info_last_updated', Date.parse(new Date()));
				} else {
					unitInfo = JSON.parse(localStorage.getItem('units_info'));
				}
			} else {
				const response = await jQuery.ajax({ url: this.unitInfoInterface });
				unitInfo = this.xml2json(jQuery(response));
				localStorage.setItem('units_info', JSON.stringify(unitInfo));
				localStorage.setItem('units_info_last_updated', Date.parse(new Date()));
			}

			return unitInfo;
		},
		groupArrayByProperty: function (array, property, filter) {
			return array.reduce(function (accumulator, object) {
				// get the value of our object(age in our case) to use for group    the array as the array key
				const key = object[property];
				// if the current value is similar to the key(age) don't accumulate the transformed array and leave it empty
				if (!accumulator[key]) {
					accumulator[key] = [];
				}
				// add the value to the array
				accumulator[key].push(object[filter]);
				// return the transformed array
				return accumulator;
				// Also we also set the initial value of reduce() to an empty object
			}, {});
		},
		formatAsNumber: function (number) {
			return parseInt(number).toLocaleString('de');
		},
		isArcherWorld: function () {
			return this.units.includes('archer');
		},
		isChurchWorld: function () {
			return 'church' in this.buildings;
		},
		isPaladinWorld: function () {
			return this.units.includes('knight');
		},
		isWatchTowerWorld: function () {
			return 'watchtower' in this.buildings;
		},
		redirectTo: function (location) {
			window.location.assign(game_data.link_base_pure + location);
		},
		renderBoxWidget: function (body, id, mainClass, customStyle) {
			const content = `
				<div class="${mainClass}" id="${id}">
					<div class="${mainClass}-header">
						<h3>${this.tt(this.scriptData.name)}</h3>
					</div>
					<div class="${mainClass}-body">
						${body}
					</div>
					<div class="${mainClass}-footer">
						<small>
							<strong>
								${this.tt(this.scriptData.name)} ${this.scriptData.version}
							</strong> -
							<a href="${this.scriptData.authorUrl}" target="_blank" rel="noreferrer noopener">
								${this.scriptData.author}
							</a> -
							<a href="${this.scriptData.helpLink}" target="_blank" rel="noreferrer noopener">
								${this.tt('Help')}
							</a>
						</small>
					</div>
				</div>
				<style>
					.${mainClass} { position: relative; display: block; width: 100%; height: auto; clear: both; margin: 10px 0 15px; border: 1px solid #603000; box-sizing: border-box; background: #f4e4bc; }
					.${mainClass} * { box-sizing: border-box; }
					.${mainClass} > div { padding: 10px; }
					.${mainClass} .btn-confirm-yes { padding: 3px; }
					.${mainClass}-header { display: flex; align-items: center; justify-content: space-between; background-color: #c1a264 !important; background-image: url(/graphic/screen/tableheader_bg3.png); background-repeat: repeat-x; }
					.${mainClass}-header h3 { margin: 0; padding: 0; line-height: 1; }
					.${mainClass}-body p { font-size: 14px; }
					.${mainClass}-body label { display: block; font-weight: 600; margin-bottom: 6px; }
					
					/* Table Styling */
					.ra-table-container { overflow-y: auto; overflow-x: hidden; height: auto; max-height: 400px; }
					.ra-table th { font-size: 14px; }
					.ra-table th label { margin: 0; padding: 0; }
					.ra-table th,
					.ra-table td { padding: 5px; text-align: center; }
					.ra-table td a { word-break: break-all; }
					.ra-table a:focus { color: blue; }
					.ra-table a.btn:focus { color: #fff; }
					.ra-table tr:nth-of-type(2n) td { background-color: #f0e2be }
					.ra-table tr:nth-of-type(2n+1) td { background-color: #fff5da; }

					/* Inputs */
					.ra-textarea { width: 100%; height: 80px; resize: none; }

					/* Popup */
					.ra-popup-content { width: 360px; }
					.ra-popup-content * { box-sizing: border-box; }
					.ra-popup-content input[type="text"] { padding: 3px; width: 100%; }
					.ra-popup-content .btn-confirm-yes { padding: 3px !important; }
					.ra-popup-content label { display: block; margin-bottom: 5px; font-weight: 600; }
					.ra-popup-content > div { margin-bottom: 15px; }
					.ra-popup-content > div:last-child { margin-bottom: 0 !important; }
					.ra-popup-content textarea { width: 100%; height: 100px; resize: none; }

					/* Custom Style */
					${customStyle}

					/* Helpers */
					.ra-pa5 { padding: 5px !important; }
					.ra-mt15 { margin-top: 15px !important; }
					.ra-mb10 { margin-bottom: 10px !important; }
					.ra-mb15 { margin-bottom: 15px !important; }
					.ra-tal { text-align: left !important; }
					.ra-tac { text-align: center !important; }
					.ra-tar { text-align: right !important; }
				</style>
			`;

			if (jQuery(`#${id}`).length < 1) {
				jQuery('#contentContainer').prepend(content);
			} else {
				jQuery(`.${mainClass}-body`).html(body);
			}
		},
		renderFixedWidget: function (body, id, mainClass, customStyle, width) {
			const content = `
				<div class="${mainClass}" id="${id}">
					<div class="${mainClass}-header">
						<h3>${this.tt(this.scriptData.name)}</h3>
					</div>
					<div class="${mainClass}-body">
						${body}
					</div>
					<div class="${mainClass}-footer">
						<small>
							<strong>
								${this.tt(this.scriptData.name)} ${this.scriptData.version}
							</strong> -
							<a href="${this.scriptData.authorUrl}" target="_blank" rel="noreferrer noopener">
								${this.scriptData.author}
							</a> -
							<a href="${this.scriptData.helpLink}" target="_blank" rel="noreferrer noopener">
								${this.tt('Help')}
							</a>
						</small>
					</div>
					<a class="popup_box_close custom-close-button" href="#">&nbsp;</a>
				</div>
				<style>
					.${mainClass} { position: fixed; top: 10vw; right: 10vw; z-index: 100; border: 1px solid #7d510f; padding: 10px; width: ${
				width ?? '360px'
			}; overflow-y: auto; padding: 10px; background: #e3d5b3 url('/graphic/index/main_bg.jpg') scroll right top repeat; }
					.${mainClass} * { box-sizing: border-box; }

					/* Table Styling */
					.ra-table-container { overflow-y: auto; overflow-x: hidden; height: auto; max-height: 400px; }
					.ra-table th { font-size: 14px; }
					.ra-table th,
					.ra-table td { padding: 5px; text-align: center; }
					.ra-table td a { word-break: break-all; }
					.ra-table a:focus { color: blue; }
					.ra-table a.btn:focus { color: #fff; }
					.ra-table tr:nth-of-type(2n) td { background-color: #f0e2be }
					.ra-table tr:nth-of-type(2n+1) td { background-color: #fff5da; }

					/* Popup */
					.ra-popup-content { width: 360px; }
					.ra-popup-content * { box-sizing: border-box; }
					.ra-popup-content input[type="text"] { padding: 3px; width: 100%; }
					.ra-popup-content .btn-confirm-yes { padding: 3px !important; }
					.ra-popup-content label { display: block; margin-bottom: 5px; font-weight: 600; }
					.ra-popup-content > div { margin-bottom: 15px; }
					.ra-popup-content > div:last-child { margin-bottom: 0 !important; }
					.ra-popup-content textarea { width: 100%; height: 100px; resize: none; }

					/* Custom Style */
					.custom-close-button { right: 0; top: 0; }
					${customStyle}

					/* Helpers */
					.ra-fw { width: 100%; }
					.ra-pa5 { padding: 5px !important; }
					.ra-mt15 { margin-top: 15px !important; }
					.ra-mb10 { margin-bottom: 10px !important; }
					.ra-mb15 { margin-bottom: 15px !important; }
					.ra-tal { text-align: left !important; }
					.ra-tac { text-align: center !important; }
					.ra-tar { text-align: right !important; }
				</style>
			`;

			if (jQuery(`#${id}`).length < 1) {
				jQuery('#contentContainer').prepend(content);
				jQuery(`#${id}`).draggable();

				jQuery(`#${id} .custom-close-button`).on('click', function (e) {
					e.preventDefault();
					jQuery(`#${id}`).remove();
				});
			} else {
				jQuery(`.${mainClass}-body`).html(body);
			}
		},
		scriptInfo: function () {
			return `[${this.scriptData.name} ${this.scriptData.version}]`;
		},
		secondsToHms: function (timestamp) {
			const hours = Math.floor(timestamp / 60 / 60);
			const minutes = Math.floor(timestamp / 60) - hours * 60;
			const seconds = timestamp % 60;
			return (
				hours.toString().padStart(2, '0') +
				':' +
				minutes.toString().padStart(2, '0') +
				':' +
				seconds.toString().padStart(2, '0')
			);
		},
		sortArrayOfObjectsByKey: function (array, key) {
			return array.sort((a, b) => b[key] - a[key]);
		},
		startProgressBar: function (total) {
			const width = jQuery('#contentContainer')[0].clientWidth;
			const preloaderContent = `
				<div id="progressbar" class="progress-bar" style="margin-bottom:12px;">
					<span class="count label">0/${total}</span>
					<div id="progress">
						<span class="count label" style="width: ${width}px;">
							0/${total}
						</span>
					</div>
				</div>
			`;
			jQuery('#contentContainer').eq(0).prepend(preloaderContent);
		},
		sumOfArrayItemValues: function (array) {
			return array.reduce((a, b) => a + b, 0);
		},
		timeAgo: function (seconds) {
			var interval = seconds / 31536000;
			if (interval > 1) return Math.floor(interval) + ' Y';

			interval = seconds / 2592000;
			if (interval > 1) return Math.floor(interval) + ' M';

			interval = seconds / 86400;
			if (interval > 1) return Math.floor(interval) + ' D';

			interval = seconds / 3600;
			if (interval > 1) return Math.floor(interval) + ' H';

			interval = seconds / 60;
			if (interval > 1) return Math.floor(interval) + ' m';

			return Math.floor(seconds) + ' s';
		},
		tt: function (string) {
			if (this.translations[game_data.locale] !== undefined) {
				return this.translations[game_data.locale][string];
			} else {
				return this.translations['en_DK'][string];
			}
		},
		updateProgressBar: function (index, total) {
			jQuery('#progress').css('width', `${((index + 1) / total) * 100}%`);
			jQuery('.count').text(`${index + 1}/${total}`);
			if (index + 1 == total) {
				jQuery('#progressbar').fadeOut(1000);
			}
		},
		xml2json: function ($xml) {
			let data = {};
			const _self = this;
			$.each($xml.children(), function (i) {
				let $this = $(this);
				if ($this.children().length > 0) {
					data[$this.prop('tagName')] = _self.xml2json($this);
				} else {
					data[$this.prop('tagName')] = $.trim($this.text());
				}
			});
			return data;
		},
		worldDataAPI: async function (entity) {
			const TIME_INTERVAL = 60 * 60 * 1000; // fetch data every hour
			const LAST_UPDATED_TIME = localStorage.getItem(`${entity}_last_updated`);

			// check if entity is allowed and can be fetched
			const allowedEntities = ['village', 'player', 'ally'];
			if (!allowedEntities.includes(entity)) {
				throw new Error(`Entity ${entity} does not exist!`);
			}

			// initial world data
			const worldData = {};

			// fetch entity data and save to localStorage
			const fetchDataAndSave = async () => {
				const DATA_ENTITY_MAP = {
					village: this.worldDataVillages,
					player: this.worldDataPlayers,
					ally: this.worldDataTribes,
				};
				const DATA_URL = DATA_ENTITY_MAP[entity];

				try {
					const response = await jQuery.ajax(DATA_URL);
					const data = this.csvToArray(response);
					localStorage.setItem(`${entity}`, JSON.stringify(data));
					localStorage.setItem(`${entity}_last_updated`, Date.parse(new Date()));
					return data;
				} catch (error) {
					throw Error(`Error fetching ${DATA_URL}`);
				}
			};

			// decide what to do based on current time and last updated entity time
			if (LAST_UPDATED_TIME !== null) {
				if (Date.parse(new Date()) >= parseInt(LAST_UPDATED_TIME) + TIME_INTERVAL) {
					worldData[entity] = await fetchDataAndSave();
				} else {
					worldData[entity] = JSON.parse(localStorage.getItem(`${entity}`));
				}
			} else {
				worldData[entity] = await fetchDataAndSave();
			}

			return worldData[entity];
		},

		// initialize library
		init: function (scriptConfig) {
			const { scriptData, translations, allowedMarkets, allowedScreens, allowedModes, isDebug, enableCountApi } =
				scriptConfig;

			this.scriptData = scriptData;
			this.translations = translations;
			this.allowedMarkets = allowedMarkets;
			this.allowedScreens = allowedScreens;
			this.allowedModes = allowedModes;
			this.isDebug = isDebug;
			this.enableCountApi = enableCountApi;

			this._initDebug();
			this._registerScript();
		},
	};
}
