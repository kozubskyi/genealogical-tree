const links = {
	boryspil:
		'https://www.google.com/maps/place/%D0%91%D0%BE%D1%80%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C,+%D0%9A%D0%B8%D0%B5%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+08300/@50.3695874,30.8710375,12z/data=!3m1!4b1!4m6!3m5!1s0x40d4e8ae77cf2579:0xfa81b50295e219d8!8m2!3d50.3482!4d30.95615!16zL20vMDQ2eHkw?authuser=0&entry=ttu',
	kyiv: 'https://www.google.com/maps/place/%D0%9A%D0%B8%D0%B5%D0%B2,+02000/@50.4020075,30.2030541,10z/data=!3m1!4b1!4m6!3m5!1s0x40d4cf4ee15a4505:0x764931d2170146fe!8m2!3d50.4503596!4d30.5245025!16zL20vMDJzbjM0?authuser=0&entry=ttu',
	zhmerynka:
		'https://www.google.com/maps/place/%D0%96%D0%BC%D0%B5%D1%80%D0%B8%D0%BD%D0%BA%D0%B0,+%D0%92%D0%B8%D0%BD%D0%BD%D0%B8%D1%86%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C/@49.0347624,28.0591778,13z/data=!3m1!4b1!4m6!3m5!1s0x4732a29eea829a9d:0xcfa8490cd0cf2c20!8m2!3d49.0390512!4d28.1085937!16zL20vMGRzeXAx?authuser=0&entry=ttu',
	warsaw:
		'https://www.google.com/maps/place/%D0%92%D0%B0%D1%80%D1%88%D0%B0%D0%B2%D0%B0,+%D0%9F%D0%BE%D0%BB%D1%8C%D1%88%D0%B0/@52.2330335,20.8963878,11z/data=!3m1!4b1!4m6!3m5!1s0x471ecc669a869f01:0x72f0be2a88ead3fc!8m2!3d52.2296756!4d21.0122287!16zL20vMDgxbV8?authuser=0&entry=ttu',
	telaviv:
		'https://www.google.com/maps/place/%D0%A2%D0%B5%D0%BB%D1%8C-%D0%90%D0%B2%D0%B8%D0%B2,+%D0%98%D0%B7%D1%80%D0%B0%D0%B8%D0%BB%D1%8C/@32.0880503,34.7148447,12z/data=!3m1!4b1!4m6!3m5!1s0x151d4ca6193b7c1f:0xc1fb72a2c0963f90!8m2!3d32.0852999!4d34.7817676!16zL20vMDdxenY?authuser=0&entry=ttu',
	toronto:
		'https://www.google.com/maps/place/%D0%A2%D0%BE%D1%80%D0%BE%D0%BD%D1%82%D0%BE,+%D0%9E%D0%BD%D1%82%D0%B0%D1%80%D0%B8%D0%BE,+%D0%9A%D0%B0%D0%BD%D0%B0%D0%B4%D0%B0/@43.718371,-79.5428663,11z/data=!3m1!4b1!4m6!3m5!1s0x89d4cb90d7c63ba5:0x323555502ab4c477!8m2!3d43.653226!4d-79.3831843!16zL20vMGg3aDY?authuser=0&entry=ttu',
	voronkiv:
		'https://www.google.com/maps/place/%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D1%8C%D0%BA%D0%BE%D0%B2,+%D0%9A%D0%B8%D0%B5%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+08352/@50.2148337,30.858403,13z/data=!3m1!4b1!4m6!3m5!1s0x40d4ed1cea9cc269:0xdc656e4470c0c9c3!8m2!3d50.2227764!4d30.903976!16s%2Fg%2F120xv685?entry=ttu',
	soshnykiv:
		'https://www.google.com/maps/place/%D0%A1%D0%BE%D1%88%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2,+%D0%9A%D0%B8%D0%B5%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+08363/@50.1063772,31.0829711,13z/data=!3m1!4b1!4m6!3m5!1s0x40d48a97dfc6351f:0x8631190bb5ebc288!8m2!3d50.1068656!4d31.1323687!16s%2Fg%2F11_yy5gzl?entry=ttu',
	netherlands:
		'https://www.google.com/maps/place/%D0%9D%D0%B8%D0%B4%D0%B5%D1%80%D0%BB%D0%B0%D0%BD%D0%B4%D1%8B/@52.1869225,2.6404952,7z/data=!3m1!4b1!4m6!3m5!1s0x47c609c3db87e4bb:0xb3a175ceffbd0a9f!8m2!3d52.132633!4d5.291266!16zL20vMDU5ajI?authuser=0&entry=ttu',
	italy:
		'https://www.google.com/maps/place/%D0%98%D1%82%D0%B0%D0%BB%D0%B8%D1%8F/@41.1781289,7.4266895,6z/data=!3m1!4b1!4m6!3m5!1s0x12d4fe82448dd203:0xe22cf55c24635e6f!8m2!3d41.87194!4d12.56738!16zL20vMDNyamo?authuser=0&entry=ttu',
	israel:
		'https://www.google.com/maps/place/%D0%98%D0%B7%D1%80%D0%B0%D0%B8%D0%BB%D1%8C/@31.3838771,32.4409269,7z/data=!3m1!4b1!4m6!3m5!1s0x1500492432a7c98b:0x6a6b422013352cba!8m2!3d31.046051!4d34.851612!16zL20vMDNzcHo?authuser=0&entry=ttu',
	russia:
		'https://www.google.com/maps/place/%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F/@47.752355,63.2917165,3z/data=!3m1!4b1!4m6!3m5!1s0x453c569a896724fb:0x1409fdf86611f613!8m2!3d61.52401!4d105.318756!16zL20vMDZibno?authuser=0&entry=ttu',
	boryspilSoborna10:
		'https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%A1%D0%BE%D0%B1%D0%BE%D1%80%D0%BD%D0%B0%D1%8F,+10,+%D0%91%D0%BE%D1%80%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C,+%D0%9A%D0%B8%D0%B5%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+08300/@50.3665434,30.9281466,17z/data=!3m1!4b1!4m6!3m5!1s0x40d4e882d2e86369:0x7920f7c6b921f660!8m2!3d50.36654!4d30.9307215!16s%2Fg%2F1tfp0zxz?authuser=0&entry=ttu',
	boryspilKniaziaSviatoslava12:
		"https://www.google.com/maps/place/50%C2%B020'52.4%22N+30%C2%B058'16.6%22E/@50.3478854,30.9687081,17z/data=!3m1!4b1!4m4!3m3!8m2!3d50.347882!4d30.971283?authuser=0&entry=ttu",
	boryspilKyivskyiShliakh47:
		'https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%9A%D0%B8%D0%B5%D0%B2%D1%81%D0%BA%D0%B8%D0%B9+%D1%88%D0%BB%D1%8F%D1%85,+47,+%D0%91%D0%BE%D1%80%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C,+%D0%9A%D0%B8%D0%B5%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+08301/@50.3582508,30.9391507,17z/data=!3m1!4b1!4m6!3m5!1s0x40d4e8a20cbea7e9:0xfe31cf491f00cba4!8m2!3d50.3582474!4d30.9417256!16s%2Fg%2F11bw3zb7j5?authuser=0&entry=ttu',
	boryspilBezhivka9:
		'https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%91%D0%B5%D0%B6%D0%B8%D0%B2%D0%BA%D0%B0,+9,+%D0%91%D0%BE%D1%80%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C,+%D0%9A%D0%B8%D0%B5%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+08300/@50.350805,30.9602407,17z/data=!3m1!4b1!4m6!3m5!1s0x40d4e8ac331fec6b:0x290b5496d9d61e90!8m2!3d50.3508016!4d30.9628156!16s%2Fg%2F1wt3lxzc?authuser=0&entry=ttu',
	boryspilSotsmistechko160:
		'https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%92%D0%BE%D0%BB%D0%BE%D0%B4%D1%8B%D0%BC%D1%8B%D1%80%D0%B0+%D0%9C%D0%BE%D0%BC%D0%BE%D1%82%D0%B0,+160,+%D0%91%D0%BE%D1%80%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C,+%D0%9A%D0%B8%D0%B5%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+08300/@50.3585539,30.9281106,17z/data=!3m1!4b1!4m6!3m5!1s0x40d4e89a1ee046c3:0xb4e6ab2892ca6594!8m2!3d50.3585505!4d30.9306855!16s%2Fg%2F1tlnbyyk?authuser=0&entry=ttu',
	boryspilLvaTolstoho1:
		'https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%9B%D1%8C%D0%B2%D0%B0+%D0%A2%D0%BE%D0%BB%D1%81%D1%82%D0%BE%D0%B3%D0%BE,+1,+%D0%91%D0%BE%D1%80%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C,+%D0%9A%D0%B8%D0%B5%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+08301/@50.3632922,30.9365022,17z/data=!3m1!4b1!4m6!3m5!1s0x40d4e89e8afb9411:0x6429c82f3982dd8b!8m2!3d50.3632888!4d30.9390771!16s%2Fg%2F11fctcfzw3?authuser=0&entry=ttu',
	boryspilLisova2:
		'https://www.google.com/maps/place/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%9B%D1%96%D1%81%D0%BE%D0%B2%D0%B0,+2,+%D0%91%D0%BE%D1%80%D0%B8%D1%81%D0%BF%D1%96%D0%BB%D1%8C,+%D0%9A%D0%B8%D1%97%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB.,+08300/@50.3467583,30.9347999,17z/data=!3m1!4b1!4m6!3m5!1s0x40d4e8b8d7ac513f:0xc24d6402138e3bc0!8m2!3d50.3467549!4d30.9373748!16s%2Fg%2F1vrq84ws?authuser=0&entry=ttu',
	boryspilLisova5:
		'https://www.google.com/maps/place/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%9B%D1%96%D1%81%D0%BE%D0%B2%D0%B0,+5,+%D0%91%D0%BE%D1%80%D0%B8%D1%81%D0%BF%D1%96%D0%BB%D1%8C,+%D0%9A%D0%B8%D1%97%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB.,+08300/@50.3462393,30.9356168,17z/data=!3m1!4b1!4m6!3m5!1s0x40d4e8b8ddef6be7:0xcb824b62c1a03ff8!8m2!3d50.3462359!4d30.9381917!16s%2Fg%2F1th85n3t?authuser=0&entry=ttu',
	boryspilSadova9:
		'https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%A1%D0%B0%D0%B4%D0%BE%D0%B2%D0%B0%D1%8F,+9,+%D0%91%D0%BE%D1%80%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C,+%D0%9A%D0%B8%D0%B5%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+08300/@50.3523469,30.9451776,17z/data=!3m1!4b1!4m6!3m5!1s0x40d4e8a4d4b07fef:0x7968ca7856e6e78c!8m2!3d50.3523435!4d30.9477525!16s%2Fg%2F11kq0d5mwj?authuser=0&entry=ttu',
	boryspilHryshynska52a:
		'https://www.google.com/maps/place/52A,+%D1%83%D0%BB.+%D0%93%D1%80%D0%B8%D1%88%D0%B8%D0%BD%D1%81%D0%BA%D0%B0%D1%8F,+52%D0%90,+%D0%91%D0%BE%D1%80%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C,+%D0%9A%D0%B8%D0%B5%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+08300/@50.3424329,30.9429801,17z/data=!3m1!4b1!4m6!3m5!1s0x40d4e8b7cdcdce9f:0x1479513b1d58536a!8m2!3d50.3424295!4d30.945555!16s%2Fg%2F1tgx0j_6?authuser=0&entry=ttu',
	boryspilHryshynska13:
		'https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%93%D1%80%D0%B8%D1%88%D0%B8%D0%BD%D1%81%D0%BA%D0%B0%D1%8F,+13,+%D0%91%D0%BE%D1%80%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C,+%D0%9A%D0%B8%D0%B5%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+08300/@50.3455719,30.9483582,17z/data=!3m1!4b1!4m6!3m5!1s0x40d4e8b6d2861151:0x3fa3cf92a05a7a16!8m2!3d50.3455685!4d30.9509331!16s%2Fg%2F1tft_1py?authuser=0&entry=ttu',
	boryspilKoroliova10:
		'https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%9A%D0%BE%D1%80%D0%BE%D0%BB%D1%91%D0%B2%D0%B0,+10,+%D0%91%D0%BE%D1%80%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C,+%D0%9A%D0%B8%D0%B5%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+08300/@50.3559001,30.9568663,17z/data=!3m1!4b1!4m6!3m5!1s0x40d4e8a8be779585:0x79f2c40dc5b4b9de!8m2!3d50.3558967!4d30.9594412!16s%2Fg%2F11sv877kcj?authuser=0&entry=ttu',
	boryspilBermud:
		"https://www.google.com/maps/place/50%C2%B021'40.4%22N+30%C2%B056'15.8%22E/@50.3612374,30.9351491,17z/data=!3m1!4b1!4m4!3m3!8m2!3d50.361234!4d30.937724?authuser=0&entry=ttu",
	boryspilYevropeiska:
		'https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%95%D0%B2%D1%80%D0%BE%D0%BF%D0%B5%D0%B9%D1%81%D0%BA%D0%B0%D1%8F,+%D0%91%D0%BE%D1%80%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C,+%D0%9A%D0%B8%D0%B5%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+08300/@50.3562182,30.9585928,17z/data=!3m1!4b1!4m6!3m5!1s0x40d4e8a8826548c3:0x80cfcb735b25b356!8m2!3d50.3562148!4d30.9611677!16s%2Fg%2F1vnthdtb?authuser=0&entry=ttu',
	boryspilKryvoruchenka:
		'https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%A1%D1%82%D0%B5%D0%BF%D0%B0%D0%BD%D0%B0+%D0%9A%D1%80%D0%B8%D0%B2%D0%BE%D1%80%D1%83%D1%87%D0%B5%D0%BD%D0%BA%D0%B0,+%D0%91%D0%BE%D1%80%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C,+%D0%9A%D0%B8%D0%B5%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+08300/@50.3416643,30.9529799,17z/data=!3m1!4b1!4m6!3m5!1s0x40d4e8b4fb46b7eb:0x636894ce5f648339!8m2!3d50.3416609!4d30.9555548!16s%2Fg%2F1tfmlxm0?authuser=0&entry=ttu',
	boryspilKorenivka:
		"https://www.google.com/maps/place/50%C2%B020'47.4%22N+30%C2%B056'16.0%22E/@50.3465059,30.9371443,19z/data=!3m1!4b1!4m4!3m3!8m2!3d50.346505!4d30.937788?authuser=0&entry=ttu",
	boryspilBratskaMohyla:
		'https://www.google.com/maps/place/Memorial+Slavy/@50.3538811,30.9466252,17z/data=!3m1!4b1!4m6!3m5!1s0x40d4e8a4e4fe0069:0x508463e778cf0bf1!8m2!3d50.3538777!4d30.9492001!16s%2Fg%2F11g6bdwlg_?authuser=0&entry=ttu',
	boryspilMiskeKladovysche:
		'https://www.google.com/maps/place/Mis%CA%B9ke+Kladovyshche/@50.3315329,30.9689037,17z/data=!3m1!4b1!4m6!3m5!1s0x40d4ef38edc17eef:0x6bbd17cbcf4b7eda!8m2!3d50.3315296!4d30.9737692!16s%2Fg%2F11c3v6zl99?authuser=0&entry=ttu',
	kyivHeneralaVatutina26app249:
		'https://www.google.com/maps/place/%D0%BF%D1%80%D0%BE%D1%81%D0%BF.+%D0%93%D0%B5%D0%BD%D0%B5%D1%80%D0%B0%D0%BB%D0%B0+%D0%92%D0%B0%D1%82%D1%83%D1%82%D0%B8%D0%BD%D0%B0,+26,+%D0%9A%D0%B8%D0%B5%D0%B2,+02000/@50.4944233,30.5964692,18z/data=!4m6!3m5!1s0x40d4d04b8408936b:0xa9666626a8ba6f4!8m2!3d50.4943997!4d30.5969808!16s%2Fg%2F11c4cnhbvl?authuser=0&entry=ttu',
	kyivBratstvaTarasivtsiv6Bapp52:
		'https://www.google.com/maps/place/6B,+%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%91%D1%80%D0%B0%D1%82%D1%81%D1%82%D0%B2%D0%B0+%D1%82%D0%B0%D1%80%D0%B0%D1%81%D1%96%D0%B2%D1%86%D1%96%D0%B2,+6%D0%91,+%D0%9A%D0%B8%D0%B5%D0%B2,+02000/@50.407459,30.6517148,17z/data=!4m6!3m5!1s0x40d4c4fed2d7f7a5:0x185a81d29754ca3e!8m2!3d50.4074556!4d30.6542897!16s%2Fg%2F1v1sjr02?authuser=0&entry=ttu',
	kyivTuretskeMistechko:
		'https://www.google.com/maps/place/%D0%A2%D1%83%D1%80%D0%B5%D1%86%D0%BA%D0%B8%D0%B9+%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D0%BE%D0%BA/@50.4158621,30.4619469,17z/data=!3m1!4b1!4m6!3m5!1s0x40d4cfdce6f4d689:0x292f431f3424673!8m2!3d50.4158587!4d30.4645218!16s%2Fg%2F11p0_wc03c?authuser=0&entry=ttu',
	kyivPivnichneKladovysche:
		'https://www.google.com/maps/place/%D0%A1%D0%B5%D0%B2%D0%B5%D1%80%D0%BD%D0%BE%D0%B5+%D0%BA%D0%BB%D0%B0%D0%B4%D0%B1%D0%B8%D1%89%D0%B5/@50.6203122,30.7883692,17z/data=!3m1!4b1!4m6!3m5!1s0x40d52814ff14d9ef:0x2c20189ca1162751!8m2!3d50.6203088!4d30.7909441!16s%2Fg%2F122896s7?authuser=0&entry=ttu',
}

const locations = {
	boryspil: {
		text: 'м. Бориспіль',
		link: links.boryspil,
	},
	kyiv: {
		text: 'м. Київ',
		link: links.kyiv,
	},
	zhmerynka: {
		text: 'м. Жмеринка',
		link: links.zhmerynka,
	},
	warsaw: {
		text: 'м. Варшава',
		link: links.warsaw,
	},
	telaviv: {
		text: 'м. Тель-Авів',
		link: links.telaviv,
	},
	toronto: {
		text: 'м. Торонто',
		link: links.toronto,
	},
	netherlands: {
		text: 'Нідерланди',
		link: links.netherlands,
	},
	italy: {
		text: 'Італія',
		link: links.italy,
	},
	israel: {
		text: 'Ізраїль',
		link: links.israel,
	},
	russia: {
		text: 'росія',
		link: links.russia,
	},
	boryspilSoborna10app13: {
		text: 'м. Бориспіль, вул. Соборна, 10, кв. 13',
		link: links.boryspilSoborna10,
	},
	boryspilSoborna10app23: {
		text: 'м. Бориспіль, вул. Соборна, 10, кв. 23',
		link: links.boryspilSoborna10,
	},
	boryspilKniaziaSviatoslava12: {
		text: 'м. Бориспіль, вул. Князя Святослава (2-й пров. Челюскінців), 12',
		link: links.boryspilKniaziaSviatoslava12,
	},
	boryspilKyivskyiShliakh47app103: {
		text: 'м. Бориспіль, вул. Київський Шлях, 47, кв. 103',
		link: links.boryspilKyivskyiShliakh47,
	},
	boryspilBezhivka9app43: {
		text: 'м. Бориспіль, вул. Бежівка (Дзержинського), 9, кв. 43',
		link: links.boryspilBezhivka9,
	},
	boryspilSotsmistechko160app8: {
		text: 'м. Бориспіль, вул. Соцмістечко, 160, кв. 8',
		link: links.boryspilSotsmistechko160,
	},
	boryspilLvaTolstoho1: {
		text: 'м. Бориспіль, вул. Льва Толстого, 1, кв. ?',
		link: links.boryspilLvaTolstoho1,
	},
	boryspilLisova2: {
		text: 'м. Бориспіль, вул. Лісова, 2',
		link: links.boryspilLisova2,
	},
	boryspilLisova5: {
		text: 'м. Бориспіль, вул. Лісова, 5',
		link: links.boryspilLisova5,
	},
	boryspilSadova9: {
		text: 'м. Бориспіль, вул. Садова, 9',
		link: links.boryspilSadova9,
	},
	boryspilHryshynska52a: {
		text: 'м. Бориспіль, вул. Гришинська (Воровського), 52А',
		link: links.boryspilHryshynska52a,
	},
	boryspilHryshynska13: {
		text: 'м. Бориспіль, вул. Гришинська (Воровського), 13',
		link: links.boryspilHryshynska13,
	},
	boryspilKoroliova10: {
		text: 'м. Бориспіль, вул. Корольова, 10',
		link: links.boryspilKoroliova10,
	},
	boryspilBermud: {
		text: 'м. Бориспіль, "Бермуд"',
		link: links.boryspilBermud,
	},
	boryspilYevropeiska: {
		text: 'м. Бориспіль, вул. Європейська, ?',
		link: links.boryspilYevropeiska,
	},
	boryspilKryvoruchenka: {
		text: 'м. Бориспіль, вул. Степана Криворученка (Красіна), ?',
		link: links.boryspilKryvoruchenka,
	},
	boryspilBratskaMohyla: {
		text: 'Братська могила меморіалу Слави м. Бориспіль',
		link: links.boryspilBratskaMohyla,
	},
	boryspilMiskeKladovysche: {
		text: 'Бориспільське міське (Рогозівське) кладовище',
		link: links.boryspilMiskeKladovysche,
	},
	kyivHeneralaVatutina26app249: {
		text: 'м. Київ, просп. Генерала Ватутіна, 26, кв. 249',
		link: links.kyivHeneralaVatutina26app249,
	},
	kyivBratstvaTarasivtsiv6Bapp52: {
		text: 'м. Київ, вул. Братства Тарасівців, 6Б, кв. 52',
		link: links.kyivBratstvaTarasivtsiv6Bapp52,
	},
	kyivTuretskeMistechko: {
		text: 'м. Київ, "Турецьке містечко"',
		link: links.kyivTuretskeMistechko,
	},
	kyivPivnichneKladovysche: {
		text: 'Київське Північне кладовище',
		link: links.kyivPivnichneKladovysche,
	},
	probablyBoryspil: {
		text: 'мабуть м. Бориспіль',
		link: links.boryspil,
	},
	probablyBoryspilLisova5: {
		text: 'мабуть м. Бориспіль, вул. Лісова, 5',
		link: links.boryspilLisova5,
	},
	probablyBoryspilSotsmistechko160app8: {
		text: 'мабуть м. Бориспіль, вул. Соцмістечко, 160, кв. 8',
		link: links.boryspilSotsmistechko160,
	},
	probablyBoryspilKorenivka: {
		text: 'мабуть м. Бориспіль, "Коренівка" (вул. Лісова / Гоголя)',
		link: links.boryspilKorenivka,
	},
	probablyBoryspilYevropeiska: {
		text: 'мабуть м. Бориспіль, вул. Європейська, ?',
		link: links.boryspilYevropeiska,
	},
	probablyBoryspilMiskeKladovysche: {
		text: 'мабуть Бориспільське міське (Рогозівське) кладовище',
		link: links.boryspilMiskeKladovysche,
	},
	probablyKyiv: {
		text: 'мабуть м. Київ',
		link: links.kyiv,
	},
	probablyZhmerynka: {
		text: 'мабуть м. Жмеринка',
		link: links.zhmerynka,
	},
	probablyVoronkiv: {
		text: 'мабуть с. Вороньків',
		link: links.voronkiv,
	},
	probablySoshnykiv: {
		text: 'мабуть с. Сошників',
		link: links.soshnykiv,
	},
	probablyTelAviv: {
		text: 'мабуть м. Тель-Авів',
		link: links.telaviv,
	},
	probablyIsrael: {
		text: 'мабуть Ізраїль',
		link: links.israel,
	},
	probablyRussia: {
		text: 'мабуть росія',
		link: links.russia,
	},
	maybeBoryspil: {
		text: 'можливо м. Бориспіль',
		link: links.boryspil,
	},
	maybeBoryspilKorenivka: {
		text: 'можливо м. Бориспіль, "Коренівка" (вул. Лісова / Гоголя)',
		link: links.boryspilKorenivka,
	},
	maybeBoryspilYevropeiska: {
		text: 'можливо м. Бориспіль, вул. Європейська, ?',
		link: links.boryspilYevropeiska,
	},
	maybeBoryspilMiskeKladovysche: {
		text: 'можливо Бориспільське міське (Рогозівське) кладовище',
		link: links.boryspilMiskeKladovysche,
	},
	maybeKyiv: {
		text: 'можливо м. Київ',
		link: links.kyiv,
	},
	maybeZhmerynka: {
		text: 'можливо м. Жмеринка',
		link: links.zhmerynka,
	},
	maybeVoronkiv: {
		text: 'можливо с. Вороньків',
		link: links.voronkiv,
	},
	maybeSoshnykiv: {
		text: 'можливо с. Сошників',
		link: links.soshnykiv,
	},
	maybeRussia: {
		text: 'можливо росія',
		link: links.russia,
	},
}

export default locations
