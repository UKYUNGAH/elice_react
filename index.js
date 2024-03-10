$(function() {
    //폼에서 새로운걸 등록했을때 새로 한줄이 추가되는 로직 만들기
    $('#create').on('submit', function(e){
        e.preventDefault();
        // 인풋에서 입력한 값 가져오기
        var value = $(this).find('input').val();

        // 삽입할때 li 추가되어야하니까
        $('#todo-list').append('<li>' +
        '<span>'+ value+'</span>' +
        '<button type="button" class="complete">완료</button> ' +
        '<button type="button" class="remove">삭제</button>'+
        '</li>')

        //input 초기화 하기
        $(this).trigger('reset');
    })

    // 바디에 완료 버튼을 누르면
    $('body').on('click', '.complete', function() {
        // 그 버튼의 부모인 li를 찾아서 completed 클래스를 li에 추가해줘라
        $(this).parent('li').addClass('completed')
    })

    // 바디에 삭제 버튼을 누르면
    $('body').on('click', '.remove', function() {
        // 그 버튼의 부모인 li를 찾아서 completed 클래스를 li에 추가해줘라
        $(this).parent('li').remove();
    })
})