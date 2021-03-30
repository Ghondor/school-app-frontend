var num = 1;
if (num == 1) {
    $(".create-tasks-submit").css("opacity", "0.4");
    $(".create-tasks-submit").css("pointer-events", "none");
}
$(document).ready(function () {
    // $('#sidebarCollapse').on('click', function () {
    //     $('#sidebar').toggleClass('active');
    //     console.log('in');

    // });
    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
    $('.disabled').click(function (e) {
        e.preventDefault();
    });
    $('.print-button').click(function () {
        window.print();
    });
});


function add_fields() {
    num++;
    if (num < 9) {
        $(".teacher-task-container").append(`
        <div class="card">
            <div class="card-body">
                <h3 class="card-title task-heading-button">Task ${num}</h3>
                <div id="taskQuestion${num}">
                    <div class="form-group">
                        <label>Task Title</label>
                        <input type="text" class="form-control" name="title" placeholder="Enter task title">
                    </div>
                    <div class="form-group">
                        <label>Question?</label>
                        <textarea class="form-control" name="question" rows="3"></textarea>
                    </div>
                    <div class="form-group">
                        <label>Answer 1</label>
                        <input type="text" class="form-control" name="answer1" placeholder="Enter answer 1">
                    </div>
                    <div class="form-group">
                        <label>Answer 2</label>
                        <input type="text" class="form-control" name="answer2" placeholder="Enter answer 2">
                    </div>
                    <div class="form-group">
                        <label>Answer 3</label>
                        <input type="text" class="form-control" name="answer3" placeholder="Enter answer 3">
                    </div>
                    <div class="form-group">
                        <label>Points</label>
                        <input type="number" class="form-control" name="points" placeholder="Enter points of this quetion" required>
                    </div>
                    <div class="form-group">
                        <label>Correct Answer</label>
                        <select class="form-control" id="correct_answer" required>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div>
                        <label>Time</label>
                    </div>
                    <div class="form-group">
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label>minutes</label>
                                <input type="number" class="form-control" id="minutes" placeholder="Number of minutes"
                                    required>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label>Seconds</label>
                                <input type="number" class="form-control" id="seconds" placeholder="Number of seconds"
                                    required>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `);
    } else if (num === 9) {
        $(".create-tasks-submit").css("opacity", "1");
        $(".create-tasks-submit").css("pointer-events", "fill");
        $(".create-tasks-submit").css("cursor", "pointer");

        $(".teacher-task-container").append(`
        <div class="card">
            <div class="card-body">
                <h3 class="card-title task-heading-button">Task ${num}</h3>
                <div id="taskQuestion${num}">
                    <div class="form-group">
                        <label>Task Title</label>
                        <input type="text" class="form-control" name="title" placeholder="Enter task title">
                    </div>
                    <div class="form-group">
                        <label>Question?</label>
                        <textarea class="form-control" name="question" rows="3"></textarea>
                    </div>
                    <div style="display: none;" class="form-group">
                        <label>Points</label>
                        <input type="number" class="form-control" name="points" placeholder="Enter points of this quetion" required>
                    </div>
                    <div>
                        <label>Time</label>
                    </div>
                    <div class="form-group">
                        <div class="row">
                            <div class="col-md-6">
                                <label>minutes</label>
                                <input type="number" class="form-control" id="minutes" placeholder="Number of minutes"
                                    required>
                            </div>
                            <div class="col-md-6">
                                <label>Seconds</label>
                                <input type="number" class="form-control" id="seconds" placeholder="Number of seconds"
                                    required>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `);
    } else {
        return;
    }
}

