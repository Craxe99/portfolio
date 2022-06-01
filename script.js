const imgDirPath = './img'

const skillDict = [
    {
        name: 'Golang',
        power: 90,
        iconName: 'go-logo'
    },
    {
        name: 'PHP — The worst',
        power: 70,
        iconName: 'php-logo'
    },
    {
        name: 'C++',
        power: 70,
        iconName: 'cpp-logo'
    },
    {
        name: 'C#',
        power: 50,
        iconName: 'csharp-logo'
    },
    {
        name: 'PSQL',
        power: 90,
        iconName: 'psql-logo'
    }
]

const skillList = document.getElementById('skill-list');

const createSkillItem = ({ name, power, iconName }) => {
    const img = document.createElement('img');
    img.setAttribute('src', `${imgDirPath}/${iconName}.svg`);
    img.setAttribute('alt', `${name} icon`);

    const dt = document.createElement('dt');
    dt.classList.add('dt');
    dt.appendChild(img);

    const skillName = document.createTextNode(name);
    dt.appendChild(skillName);

    const dd = document.createElement('dd');
    dd.classList.add('dd');

    const progressDiv = document.createElement('div');
    progressDiv.style.width = `${power}%`;
    progressDiv.textContent = `${power}%`;

    dd.appendChild(progressDiv);
    skillList.appendChild(dt);
    skillList.appendChild(dd);
}

if (skillList) {
    skillDict.forEach(skill => createSkillItem(skill))
}

