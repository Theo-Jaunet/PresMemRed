function what(tick) {


    console.log('doing slide: ' + tick);
    switch (tick) {
        case 0:
            $('#intro').css('visibility', 'hidden');
            $('#fig_main').css('visibility', 'visible');
            break;
        case 1:
            timer = setInterval(manege, 115);
            break;
        case 2:
            highelems([28]);
            break;
        case 3:
            meta_change('diy/red28_-1.json', [28, -1]);
            break;
        case 4:
            update_stage('1');
            $('.selected').toggleClass('selected');
            $('.nav[index=1]').toggleClass('selected');
            break;
        case 5:
            meta_switch(3);
            break;
        case 6:
            meta_switch(10);
            break;
        case 7:
            update_stage('2');
            $('.selected').toggleClass('selected');
            $('.nav[index=2]').toggleClass('selected');
            break;
        case 8:
            meta_switch(0);
            break;
        case 9:
            meta_switch(1);
            break;
        case 10:
            meta_switch(2);
            break;
        case 11:
            meta_switch(3);
            break;
        case 12:
            update_stage('3');
            $('.selected').toggleClass('selected');
            $('.nav[index=3]').toggleClass('selected');
            break;
        case 13:
            highelems([8, 29, 12, 25, 11, 7, 15, 24])
            break;
        case 14:
            highelems([8, 29, 12, 25, 11, 7, 15, 24, 21, 5]);
            break;
        case 15:
            meta_switch(0);
            break;
        case 16:
            update_stage('3');
            highelems([8, 29, 12, 25, 11, 7, 15, 24, 21, 5]);
            break;
        case 17:
            highelems([8, 29, 12, 25, 11, 7, 15, 24, 21, 5, 10, 3, 0]);
            break;
        case 18:
            meta_switch(1);
            break;
        case 19:
            update_stage('4');
            $('.selected').toggleClass('selected');
            $('.nav[index=4]').toggleClass('selected');
            break;
        case 20:
            meta_change('diy/red0_-1.json', [0, -1]);
            break;
        case 21:
            meta_change('diy/red5_23.json', [5, 23]);
            break;
    }


}


function whut(tick) {
    console.log('reversing to slide: ' + tick);
    switch (tick) {
        case -1:
            $('#intro').css('visibility', 'visible');
            $('#fig_main').css('visibility', 'hidden');
            break;
        case 0:
            clearInterval(timer)
            timer = null
            break;
        case 1:
            resetelems();

            break;
        case 2:
            update_stage('0');
            highelems([28]);
            break;
        case 3:
            update_stage('0');
            meta_change('diy/red28_-1.json', [28, -1]);
            $('.selected').toggleClass('selected');
            $('.nav[index=0]').toggleClass('selected');
            break;
        case 4:
            update_stage('1');
            break;
        case 5:
            meta_switch(3);
            break;
        case 6:
            update_stage('1');
            $('.selected').toggleClass('selected');
            $('.nav[index=1]').toggleClass('selected');
            meta_switch(10);
            break;
        case 7:
            update_stage('2');
            break;
        case 8:
            meta_switch(0);
            break;
        case 9:
            meta_switch(1);
            break;
        case 10:
            meta_switch(2);
            break;
        case 11:
            update_stage('2');
            $('.selected').toggleClass('selected');
            $('.nav[index=2]').toggleClass('selected');
            meta_switch(3);
            break;
        case 12:
            resetelems();
            break;
        case 13:
            highelems([8, 29, 12, 25, 11, 7, 15, 24]);
            break;
        case 14:
            update_stage('3');
            highelems([8, 29, 12, 25, 11, 7, 15, 24, 21, 5]);
            break;
        case 15:
            meta_switch(0);
            break;
        case 16:
            highelems([8, 29, 12, 25, 11, 7, 15, 24, 21, 5]);
            break;
        case 17:
            update_stage('3');
            highelems([8, 29, 12, 25, 11, 7, 15, 24, 21, 5, 10, 3, 0]);
            break;
        case 18:
            update_stage('3');
            $('.selected').toggleClass('selected');
            $('.nav[index=3]').toggleClass('selected');
            meta_switch(1);
            break;
        case 19:
            update_stage('4');
            break;
        case 20:
            meta_change('diy/red0_-1.json', [0, -1]);
            break;
        case 21:
            meta_change('diy/red5_23.json', [5, 23]);
            break;
    }


}




