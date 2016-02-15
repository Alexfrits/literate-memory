  let test = () => 'test';
  console.log(test());

  const func = function constFunc (arg1, arg2, arg3) {
    let array = [];
    array.push(arg1, arg2, arg3);
    return (array);
  };

  console.log(func(['arg1', 'arg2', 'arg3' ]));
