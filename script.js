const skills = {
    skillsData: [],
    imgDirPath: './img',
    isSortedByDesc: true,

    init: async function () {
        const response = await fetch('db/skills.json');
        this.skillsData = await response.json();

        this.renderList();
    },

    renderList: function () {
        const skillList = document.getElementById('skill-list');

        if (!skillList) {
            return;
        }

        skillList.innerHTML = '';

        const {skillsData, imgDirPath} = this;

        skillsData.forEach(({name, power, iconName}) => {
            const img = document.createElement('img');
            img.src = `${imgDirPath}/${iconName}.svg`;
            img.alt = `${name} icon`;

            const dt = document.createElement('dt');
            dt.classList.add('dt');
            dt.appendChild(img);

            const skillName = document.createTextNode(name);
            dt.appendChild(skillName);

            const progressDiv = document.createElement('div');
            progressDiv.style.width = `${power}%`;
            progressDiv.textContent = `${power}%`;

            const dd = document.createElement('dd');
            dd.classList.add('dd');
            dd.appendChild(progressDiv);

            skillList.appendChild(dt);
            skillList.appendChild(dd);
        });
    },

    sort: function (field) {
        switch (field) {
            case 'power':
                this.sortByPower();
                break;
            case 'name':
                this.sortByName();
                break;
            default:
                break;
        }
    },

    sortByField: function (array = [], fieldName, shouldSortByDesc = false) {
        if (!fieldName) {
            return array;
        }

        return array.sort((a, b) => {
            if (a[fieldName] < b[fieldName]) {
                return shouldSortByDesc ? 1 : -1;
            }

            if (a[fieldName] > b[fieldName]) {
                return shouldSortByDesc ? -1 : 1;
            }

            return 0;
        });
    },

    sortByPower: function () {
        const {skillsData, isSortedByDesc, sortByField} = this;
        const sortedItems = sortByField(
            skillsData,
            'power',
            !isSortedByDesc
        );

        this.isSortedByDesc = !isSortedByDesc;
        this.skillsData = sortedItems;
        this.renderList();
    },

    sortByName: function () {
        const {skillsData, isSortedByDesc, sortByField} = this;
        const sortedItems = sortByField(
            skillsData,
            'name',
            !isSortedByDesc
        );

        this.isSortedByDesc = !isSortedByDesc;
        this.skillsData = sortedItems;
        this.renderList();
    }
};

skills.init();
