//화살표(Arrow) 함수
//ES5(ECMASCRIPT 2015)에서 시작된 새로운 개념의 함수
//function 키워드가 사라졌다.
//()로 시작되는 함수 명령문
//() ekdmadp => 연산자가 나타난다.
const func1 = () => {
  console.log("나는 화살표(Arrow)함수 입니다");
};
func1();

//한개의 매개변수를 가지는 함수 선언문
const func2 = (num) => {
  console.log(num);
};

//두개의 매개변수를 가지는  func3 함수 선언
//두개의 매개변수 값을 덧셈하여 return한다.
const func3 = (num1, num2) => {
  return num1 + num2;
};

//두개의 매개변수를 받아서 덧셈하여 return하는 func4함수
//함수 본체에 다른 코드가 없이 오로지 return 명령문만 있을경우
//{}와 return 키워드를 생략할 수 있다.
const func4 = (num1, num2) => num1 + num2;
//const func4 = (num1, num2) => {return num1 + num2};

const func5 = (num1) => num1;
const func6 = (res) => func5(res);
const result = func6(100);
console.log(result);

const func51 = function (num1) {
  return num1;
};
const func61 = function (res) {
  return res;
};
const result1 = func61(100);
console.log(result1);

//std_button.addEventListner("click", () => {});
//std_button.addEventListner("click", function () {});
