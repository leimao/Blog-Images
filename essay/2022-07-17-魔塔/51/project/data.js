var data_a1e2fb4a_e986_4524_b0da_9b7ba7c0874d = 
{
	"main": {
		"floorIds": [
			"MT0",
			"MT1",
			"MT2",
			"MT3",
			"MT4",
			"MT5",
			"MT6",
			"MT7",
			"MT8",
			"MT9",
			"MT10",
			"MT11",
			"MT12",
			"MT13",
			"MT14",
			"MT15",
			"MT16",
			"MT17",
			"MT18",
			"MT19",
			"MT20",
			"MT21",
			"MT22",
			"MT23",
			"MT24",
			"MT25",
			"MT26",
			"MT27",
			"MT28",
			"MT29",
			"MT30",
			"MT31",
			"MT32",
			"MT33",
			"MT34",
			"MT35",
			"MT36",
			"MT37",
			"MT38",
			"MT39",
			"MT40",
			"MT41",
			"MT42",
			"MT43",
			"MT44",
			"MT45",
			"MT46",
			"MT47",
			"MT48",
			"MT49",
			"MT50"
		],
		"images": [
			"bg.jpg",
			"winskin.png",
			"statusBackground.jpg"
		],
		"tilesets": [],
		"animates": [
			"hand",
			"sword",
			"zone"
		],
		"bgms": [
			"xiaoluoli.mp3",
			"wan.mp3",
			"huang.mp3",
			"xian.mp3",
			"chuanshuo.mp3",
			"ed.mp3",
			"hua.mp3",
			"migong.mp3",
			"bgm.mp3",
			"section1.mp3",
			"section2.mp3",
			"section3.mp3",
			"section4.mp3",
			"section5.mp3",
			"boss4.mp3",
			"boss5.mp3",
			"truth.mp3"
		],
		"sounds": [
			"floor.mp3",
			"attack.mp3",
			"door.mp3",
			"item.mp3",
			"equip.mp3",
			"zone.mp3",
			"jump.mp3",
			"pickaxe.mp3",
			"bomb.mp3",
			"centerFly.mp3",
			"3F.mp3",
			"10F.mp3",
			"20F.mp3"
		],
		"startBackground": "bg.jpg",
		"startLogoStyle": "color: black",
		"levelChoose": [
			[
				"简单",
				"Easy"
			]
		],
		"equipName": [],
		"startBgm": null,
		"statusLeftBackground": "url(project/images/ground.png) repeat",
		"statusTopBackground": "url(project/images/ground.png) repeat",
		"toolsBackground": "url(project/images/ground.png) repeat",
		"borderColor": "black",
		"statusBarColor": "#66CCFF",
		"hardLabelColor": "#66CCFF",
		"floorChangingBackground": "black",
		"floorChangingTextColor": "#66CCFF",
		"font": "Verdana"
	},
	"firstData": {
		"title": "50层魔塔",
		"name": "51",
		"version": "Ver 2.6",
		"floorId": "MT1",
		"hero": {
			"name": "勇者",
			"lv": 1,
			"hpmax": 9999,
			"hp": 1000,
			"manamax": -1,
			"mana": 0,
			"atk": 100,
			"def": 100,
			"mdef": 0,
			"money": 0,
			"experience": 0,
			"equipment": [],
			"items": {
				"keys": {
					"yellowKey": 0,
					"blueKey": 0,
					"redKey": 0
				},
				"constants": {
					"I300": 1
				},
				"tools": {},
				"equips": {}
			},
			"loc": {
				"direction": "down",
				"x": 6,
				"y": 11
			},
			"flags": {
				"nowWeapon": "sword5",
				"nowShield": "shield5",
				"__winskin_opacity__": 1
			},
			"steps": 0
		},
		"startCanvas": [
			{
				"type": "comment",
				"text": "在这里可以用事件来自定义绘制标题界面的背景图等"
			},
			{
				"type": "comment",
				"text": "也可以直接切换到其他楼层（比如某个开始剧情楼层）进行操作。"
			},
			{
				"type": "showImage",
				"code": 1,
				"image": "bg.jpg",
				"loc": [
					0,
					0
				],
				"dw": 100,
				"dh": 100,
				"opacity": 1,
				"time": 0
			},
			{
				"type": "while",
				"condition": "1",
				"data": [
					{
						"type": "comment",
						"text": "给用户提供选择项，这里简单的使用了choices事件"
					},
					{
						"type": "comment",
						"text": "也可以贴按钮图然后使用等待操作来完成"
					},
					{
						"type": "choices",
						"choices": [
							{
								"text": "开始游戏",
								"action": [
									{
										"type": "comment",
										"text": "检查bgm状态，下同"
									},
									{
										"type": "function",
										"function": "function(){\ncore.control.checkBgm()\n}"
									},
									{
										"type": "if",
										"condition": "core.flags.startDirectly",
										"true": [
											{
												"type": "comment",
												"text": "直接开始游戏，设置初始化数据"
											},
											{
												"type": "function",
												"function": "function(){\ncore.events.setInitData('')\n}"
											}
										],
										"false": [
											{
												"type": "comment",
												"text": "动态生成难度选择项"
											},
											{
												"type": "function",
												"function": "function(){\nvar choices = [];\nmain.levelChoose.forEach(function (one) {\n\tchoices.push({\"text\": one[0], \"action\": [\n\t\t{\"type\": \"function\", \"function\": \"function() { core.status.hard = '\"+one[1]+\"'; core.events.setInitData('\"+one[1]+\"'); }\"}\n\t]});\n})\ncore.insertAction({\"type\": \"choices\", \"choices\": choices});\n}"
											}
										]
									},
									{
										"type": "hideImage",
										"code": 1,
										"time": 0
									},
									{
										"type": "comment",
										"text": "成功选择难度"
									},
									{
										"type": "break"
									}
								]
							},
							{
								"text": "读取存档",
								"action": [
									{
										"type": "function",
										"function": "function(){\ncore.control.checkBgm()\n}"
									},
									{
										"type": "comment",
										"text": "简单的使用“呼出读档界面”来处理"
									},
									{
										"type": "callLoad"
									}
								]
							},
							{
								"text": "回放录像",
								"action": [
									{
										"type": "function",
										"function": "function(){\ncore.control.checkBgm()\n}"
									},
									{
										"type": "comment",
										"text": "这段代码会弹框选择录像文件"
									},
									{
										"type": "if",
										"condition": "!core.isReplaying()",
										"true": [
											{
												"type": "function",
												"function": "function(){\ncore.chooseReplayFile()\n}"
											}
										],
										"false": []
									}
								]
							}
						]
					}
				]
			},
			{
				"type": "comment",
				"text": "接下来会执行startText中的事件"
			}
		],
		"startText": [
			{
				"type": "setText",
				"background": "winskin.png"
			}
		],
		"shops": [],
		"levelUp": [
			{
				"need": "0",
				"title": "",
				"action": [
					{
						"type": "comment",
						"text": "此处是初始等级，只需填写称号"
					}
				]
			},
			{
				"need": "20",
				"title": "第二级",
				"action": [
					{
						"type": "setValue",
						"name": "status:atk",
						"value": "status:atk+10"
					},
					{
						"type": "setValue",
						"name": "status:def",
						"value": "status:def+10"
					}
				]
			},
			{
				"need": "40",
				"title": "",
				"action": [
					{
						"type": "tip",
						"text": "恭喜升级"
					}
				]
			}
		]
	},
	"values": {
		"lavaDamage": 100,
		"poisonDamage": 10,
		"weakValue": 20,
		"redJewel": 1,
		"blueJewel": 1,
		"greenJewel": 5,
		"redPotion": 50,
		"bluePotion": 200,
		"yellowPotion": 500,
		"greenPotion": 800,
		"breakArmor": 0.9,
		"counterAttack": 0.1,
		"purify": 3,
		"hatred": 2,
		"moveSpeed": 100,
		"animateSpeed": 400,
		"floorChangeTime": 0
	},
	"flags": {
		"enableFloor": true,
		"enableName": false,
		"enableLv": false,
		"enableHPMax": false,
		"enableMana": false,
		"enableMDef": false,
		"enableMoney": true,
		"enableExperience": false,
		"enableLevelUp": false,
		"levelUpLeftMode": false,
		"enableKeys": true,
		"enablePZF": false,
		"enableDebuff": false,
		"enableSkill": false,
		"flyNearStair": true,
		"pickaxeFourDirections": true,
		"bombFourDirections": true,
		"snowFourDirections": true,
		"bigKeyIsBox": false,
		"steelDoorWithoutKey": false,
		"equipment": false,
		"equipboxButton": false,
		"iconInEquipbox": false,
		"enableAddPoint": false,
		"enableNegativeDamage": false,
		"hatredDecrease": true,
		"betweenAttackCeil": false,
		"betweenAttackMax": false,
		"useLoop": true,
		"startUsingCanvas": false,
		"startDirectly": true,
		"statusCanvas": false,
		"statusCanvasRowsOnMobile": 4,
		"displayEnemyDamage": true,
		"displayCritical": true,
		"displayExtraDamage": true,
		"enableGentleClick": false,
		"potionWhileRouting": false,
		"ignoreChangeFloor": false,
		"canGoDeadZone": false,
		"enableMoveDirectly": true,
		"enableDisabledShop": true,
		"disableShopOnDamage": false,
		"checkConsole": false,
		"flyRecordPosition": null,
		"itemFirstText": null,
		"blurFg": null
	}
}