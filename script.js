function showCharacter(character) {
    let name = document.getElementById('character-name');
    let description = document.getElementById('character-description');
    let dialogue = document.getElementById('dialogue');

    if (character === '孔子') {
        name.innerText = '孔子';
        description.innerText = '孔子（公元前551年—公元前479年），是中国历史上最伟大的教育家、思想家、政治家之一。';
        dialogue.innerHTML = `
            <strong>用户：</strong>孔子，您是怎么看待教育的？<br>
            <strong>孔子：</strong>教育的本质是启发学生的智慧，培养他们的品德。真正的教育，是要教会学生如何做人，而不仅仅是传授知识。<br><br>
            
            <strong>用户：</strong>孔子，您认为什么是“仁”？<br>
            <strong>孔子：</strong>仁是人类的根本美德。它意味着宽容、关怀他人、为他人着想，并且保持内心的和谐与平衡。<br><br>
            
            <strong>用户：</strong>您对当前社会有哪些建议？<br>
            <strong>孔子：</strong>社会应当以礼、义、廉、耻为根本。只有以礼待人，才能建立和谐的社会。<br><br>
        `;
    }
    else if (character === '拿破仑') {
        name.innerText = '拿破仑';
        description.innerText = '拿破仑·波拿巴（1769年—1821年），法国军事统帅和政治家，是法国历史上最杰出的军事人物之一。';
        dialogue.innerHTML = `
            <strong>用户：</strong>拿破仑，您如何看待战略战争？<br>
            <strong>拿破仑：</strong>战争是一种艺术，战略就是以最小的代价获得最大的胜利。<br><br>
            
            <strong>用户：</strong>您是如何组织和指挥军队的？<br>
            <strong>拿破仑：</strong>我坚信军队的精良训练和强大的士气是胜利的关键。每个军官都应当具备灵活的应变能力，能够随时应对战场变化。<br><br>
            
            <strong>用户：</strong>您曾如何面对失败？<br>
            <strong>拿破仑：</strong>失败是暂时的，只要能从中学习并继续前行，就一定能够东山再起。<br><br>
        `;
    }
    else if (character === '居里夫人') {
        name.innerText = '居里夫人';
        description.innerText = '居里夫人（1867年—1934年），法国物理学家、化学家，曾两次获得诺贝尔奖。';
        dialogue.innerHTML = `
            <strong>用户：</strong>居里夫人，您的科研成就让您享有声誉，您有什么心得分享？<br>
            <strong>居里夫人：</strong>没有什么可以替代的努力，只有持之以恒的工作与不断的学习。<br><br>
            
            <strong>用户：</strong>您是如何克服工作中的困难的？<br>
            <strong>居里夫人：</strong>面对挑战时，我总是相信，坚持就是胜利。科研道路上充满了艰辛和挑战，但没有任何困难能阻止我追求真理的脚步。<br><br>
            
            <strong>用户：</strong>如何看待女性在科研领域的地位？<br>
            <strong>居里夫人：</strong>科研无关性别，所有追求知识的勇士都应得到尊重与机会。<br><br>
        `;
    }
    else if (character === '伽利略') {
        name.innerText = '伽利略';
        description.innerText = '伽利略（1564年—1642年），意大利物理学家、天文学家，现代科学的奠基人之一。';
        dialogue.innerHTML = `
            <strong>用户：</strong>伽利略，您怎么看待科学与宗教的冲突？<br>
            <strong>伽利略：</strong>科学是追求真理的道路，尽管它可能与当时的宗教观点发生冲突，但真理是无法忽视的。<br><br>
            
            <strong>用户：</strong>在您的科研过程中，遇到过哪些挑战？<br>
            <strong>伽利略：</strong>当时的宗教势力压制科学的发展，面对巨大的压力，我依然坚持自己的研究，尽力向世人展示科学的价值。<br><br>
            
            <strong>用户：</strong>您对于现代科学有什么建议？<br>
            <strong>伽利略：</strong>现代科学应当保持批判性的思维，勇敢地探索未知，而不被传统的束缚所限制。<br><br>
        `;
    }
}
