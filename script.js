// // const user = "Giorgi";

// // if (user === "Aleksandre") {
// //   console.log("Aleksandre");
// // } else if (user === "Nikolozi") {
// //   console.log("Nikoloz");
// // } else {
// //   console.log("Arcerti");
// // }

// // var isEighteen = true;

// // console.log(!isEighteen);

// // var arr = [0, 1, 2, 3];

// // var i = 0;
// // do {
// //   console.log("aaa");
// //   i++;
// // } while (i < 5);

// // for (let i = 0; i < 5; i++) {
// //   console.log("Hello World!");
// //   console.log(i);
// // }
// // console.log("vso");

// // var arrrr = [0, 1, 2];

// var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 999];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
//   // console.log(i);
// }

// // console.log(arr[4]);

// // arr.forEach((element) => {
// //   console.log(element);
// // });

// // arr.map((element) => {
// //   console.log(element);
// // });

// for (let i = 0; i > -10; i--) {
//   console.log(i);
// }

// // i++    -     i = i + 1       - i += 1
// // i--    -     i = i - 1       - i -= 1

var createTask = (description) => {
  var task = {
    description,
    isCompleted: false,
    markCompleted: () => {
      task.isCompleted = true;
    },
    markPending: () => {
      task.isCompleted = false;
    },
    getInfo: () => {
      if (task.isCompleted) {
        console.log(`[ V ]  ${description}`);
      } else {
        console.log(`[ ] ${description}`);
      }
    },
  };

  return task;
};

var createTodo = () => {
  var tasks = [];

  var Todolist = {
    addTask: (description) => {
      var newTask = createTask(description);
      tasks.push(newTask);
    },
    removeTask: (index) => {
      if (index >= 0 && index < tasks.length) {
        tasks.splice(index, 1);
      } else {
        console.log("No such task");
      }
    },
    getTasks: () => {
      console.log("____________________________");
      tasks.forEach((task) => {
        task.getInfo();
      });
      console.log("____________________________");
    },
    markTaskCompleted: (index) => {
      if (index >= 0 && index < tasks.length) {
        tasks[index].markCompleted();
      } else {
        console.log("No such task");
      }
    },
    markTaskPending: (index) => {
      if (index >= 0 && index < tasks.length) {
        tasks[index].markPending();
      } else {
        console.log("No such task");
      }
    },
  };
  return Todolist;
};

var myTodoList = createTodo();

myTodoList.addTask("akademiashi wasvla");
myTodoList.addTask("leqciis chatareba");
myTodoList.addTask("saxlshi wasvla");

myTodoList.getTasks();

myTodoList.markTaskCompleted(0);

// myTodoList.removeTask(0);

myTodoList.markTaskPending(0);

myTodoList.getTasks();
