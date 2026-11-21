/**
 * 해성중학교 학년부 대시보드 공통 설정 파일
 * ------------------------------------------------------------
 * 1. CONFIG_APPS_SCRIPT_URL이 비어("") 있으면 [설정 로컬 테스트 모드]로 동작합니다.
 *    (이 브라우저에서만 admin.html 변경 사항을 미리 테스트할 수 있으며,
 *     1·2·3학년 전달사항/D-Day는 기존 해성중 Apps Script와 정상 연동됩니다.)
 * 2. 설정 전용 구글 시트 + SettingsCode.gs 배포 후 웹앱 URL(/exec)을 아래에 넣으면
 *    admin.html에서 수정한 설정이 모든 선생님 PC에 일괄 반영됩니다.
 */
window.DASHBOARD_ENV = {
    // ▼ 설정 전용 Google Apps Script 웹앱 URL(/exec)을 붙여넣으세요. (비워두면 로컬 테스트 모드)
    CONFIG_APPS_SCRIPT_URL: ""
};

window.DEFAULT_CONFIG = {
    schoolName: "해성중학교",
    fontFamily: "nanumround", // nanumround | gmarket | spoqa | ibm | pretendard
    weatherLabel: "거제 날씨",
    weatherLat: 34.8806,
    weatherLon: 128.6211,
    neisOfficeCode: "S10",
    neisAddressKeyword: "거제",

    // 학년별 개별 설정 (1·2·3학년 각각의 시트 URL, 반 수, 학년 전용 바로가기)
    grades: {
        "1": {
            name: "1학년부",
            classCount: 8,
            url: "https://script.google.com/macros/s/AKfycbwCfyq_ZL1VHQaJJZ_Mk641RH8kyZ08e2CrwzmJEhkqGZDcrhtyeXD4DB5vjKZZG51n/exec",
            shortcuts: [
                { icon: "📋", title: "1학년 명렬표", url: "https://docs.google.com/spreadsheets/d/1dNWRvp0ke75YH6fXN-1xJFhPZe2ZFS2eh9QwMOcMbIc/edit?gid=0#gid=0" }
            ]
        },
        "2": {
            name: "2학년부",
            classCount: 8,
            url: "https://script.google.com/macros/s/AKfycbwYL0i-vPrpCn98T3m-FCPQ5_cHp8ejlO29VCWJ4BsaRpX7VbfVnU0yUPZjXW_yiaIk/exec",
            shortcuts: [
                { icon: "🎓", title: "2학년 관련 링크", url: "https://2학년주소넣기.com" }
            ]
        },
        "3": {
            name: "3학년부",
            classCount: 7,
            url: "https://script.google.com/macros/s/AKfycbzpJTCMBVu6c4VQcgdPBhcjPSyP2jS39oo4jrZorFxMS2TeERemAL-oSO7NEaFePdVUHw/exec",
            shortcuts: [
                { icon: "🎓", title: "3학년 진학희망 고교", url: "https://joo.is/고등학교희망" }
            ]
        }
    },

    // 학교 공통 사이드바 바로가기 (group: 1~4 색상 구분, 학년별 링크는 그룹 2 상단에 자동 표시)
    shortcuts: [
        { group: 1, icon: "🏢", title: "업무포털 (경남)", url: "https://gne.eduptl.kr/bpm_lgn_lg00_001.do?noEpSession" },
        { group: 1, icon: "💬", title: "아이톡톡", url: "https://newtab.itt.link/v3/index.do" },
        { group: 1, icon: "🟩", title: "네이버", url: "https://www.naver.com" },
        { group: 1, icon: "🔍", title: "학교종이", url: "https://schoolbell-e.com/ko/main/home" },

        { group: 2, icon: "🏫", title: "해성중학교", url: "http://seastar-m.gne.go.kr" },
        { group: 2, icon: "🛠️", title: "정보기기 수리접수", url: "https://joo.is/해성중정보화기기" },
        { group: 2, icon: "📑", title: "해성중 업무시트", url: "https://joo.is/해성중업무" },

        { group: 3, icon: "🤖", title: "ChatGPT", url: "https://chatgpt.com" },
        { group: 3, icon: "✨", title: "제미나이", url: "https://gemini.google.com" },
        { group: 3, icon: "🧮", title: "이음AI", url: "https://ieumai.com/" },
        { group: 3, icon: "🎨", title: "미리캔버스", url: "https://www.miricanvas.com/" },

        { group: 4, icon: "📚", title: "경남교육연수", url: "https://www.gneti.or.kr" },
        { group: 4, icon: "💻", title: "온라인 전달연수", url: "https://www.gnlec.kr/" },
        { group: 4, icon: "🔗", title: "고등학교 어디가!", url: "https://joo.is/고등학교어디가" }
    ],

    // 해성중학교 일과표 (평일 기본: 월·금 6교시+청소 / 화·목: 7교시 / 수: 9시 시작 6교시)
    schedule: {
        weekendMessage: "주말입니다. 편안한 휴일 보내세요! 🌿",
        beforeMessage: "현재 수업 외 시간입니다.",
        afterMessage: "모든 일과가 종료되었습니다. 고생하셨습니다! 👏",
        defaultWeekday: [
            { start: "08:50", end: "09:00", label: "조회 시간입니다." },
            { start: "09:00", end: "09:45", label: "현재 1교시 수업 중입니다." },
            { start: "09:45", end: "09:55", label: "지금은 쉬는 시간입니다." },
            { start: "09:55", end: "10:40", label: "현재 2교시 수업 중입니다." },
            { start: "10:40", end: "10:50", label: "지금은 쉬는 시간입니다." },
            { start: "10:50", end: "11:35", label: "현재 3교시 수업 중입니다." },
            { start: "11:35", end: "11:45", label: "지금은 쉬는 시간입니다." },
            { start: "11:45", end: "12:30", label: "현재 4교시 수업 중입니다." },
            { start: "12:30", end: "13:30", label: "점심 시간입니다. 🍱" },
            { start: "13:30", end: "14:15", label: "현재 5교시 수업 중입니다." },
            { start: "14:15", end: "14:35", label: "지금은 청소 시간입니다. 🧹" },
            { start: "14:35", end: "15:20", label: "현재 6교시 수업 중입니다." }
        ],
        dayOverrides: {
            "1": null,
            "2": [
                { start: "08:50", end: "09:00", label: "조회 시간입니다." },
                { start: "09:00", end: "09:45", label: "현재 1교시 수업 중입니다." },
                { start: "09:45", end: "09:55", label: "지금은 쉬는 시간입니다." },
                { start: "09:55", end: "10:40", label: "현재 2교시 수업 중입니다." },
                { start: "10:40", end: "10:50", label: "지금은 쉬는 시간입니다." },
                { start: "10:50", end: "11:35", label: "현재 3교시 수업 중입니다." },
                { start: "11:35", end: "11:45", label: "지금은 쉬는 시간입니다." },
                { start: "11:45", end: "12:30", label: "현재 4교시 수업 중입니다." },
                { start: "12:30", end: "13:30", label: "점심 시간입니다. 🍱" },
                { start: "13:30", end: "14:15", label: "현재 5교시 수업 중입니다." },
                { start: "14:15", end: "14:25", label: "지금은 쉬는 시간입니다." },
                { start: "14:25", end: "15:10", label: "현재 6교시 수업 중입니다." },
                { start: "15:10", end: "15:20", label: "지금은 쉬는 시간입니다." },
                { start: "15:20", end: "16:05", label: "현재 7교시 수업 중입니다." }
            ],
            "3": [
                { start: "09:00", end: "09:10", label: "조회 시간입니다." },
                { start: "09:10", end: "09:55", label: "현재 1교시 수업 중입니다." },
                { start: "09:55", end: "10:05", label: "지금은 쉬는 시간입니다." },
                { start: "10:05", end: "10:50", label: "현재 2교시 수업 중입니다." },
                { start: "10:50", end: "11:00", label: "지금은 쉬는 시간입니다." },
                { start: "11:00", end: "11:45", label: "현재 3교시 수업 중입니다." },
                { start: "11:45", end: "11:55", label: "지금은 쉬는 시간입니다." },
                { start: "11:55", end: "12:40", label: "현재 4교시 수업 중입니다." },
                { start: "12:40", end: "13:40", label: "점심 시간입니다. 🍱" },
                { start: "13:40", end: "14:25", label: "현재 5교시 수업 중입니다." },
                { start: "14:25", end: "14:35", label: "지금은 쉬는 시간입니다." },
                { start: "14:35", end: "15:20", label: "현재 6교시 수업 중입니다." }
            ],
            "4": [
                { start: "08:50", end: "09:00", label: "조회 시간입니다." },
                { start: "09:00", end: "09:45", label: "현재 1교시 수업 중입니다." },
                { start: "09:45", end: "09:55", label: "지금은 쉬는 시간입니다." },
                { start: "09:55", end: "10:40", label: "현재 2교시 수업 중입니다." },
                { start: "10:40", end: "10:50", label: "지금은 쉬는 시간입니다." },
                { start: "10:50", end: "11:35", label: "현재 3교시 수업 중입니다." },
                { start: "11:35", end: "11:45", label: "지금은 쉬는 시간입니다." },
                { start: "11:45", end: "12:30", label: "현재 4교시 수업 중입니다." },
                { start: "12:30", end: "13:30", label: "점심 시간입니다. 🍱" },
                { start: "13:30", end: "14:15", label: "현재 5교시 수업 중입니다." },
                { start: "14:15", end: "14:25", label: "지금은 쉬는 시간입니다." },
                { start: "14:25", end: "15:10", label: "현재 6교시 수업 중입니다." },
                { start: "15:10", end: "15:20", label: "지금은 쉬는 시간입니다." },
                { start: "15:20", end: "16:05", label: "현재 7교시 수업 중입니다." }
            ],
            "5": null
        }
    }
};
