function CheckAge()
{
    age = prompt("Проверка возраста", "Введите свой возраст")
    if (typeof(parseInt(age)) != "number")
        {
            console.log("Error. Invalid type")
        }
    else
        {
        age_2 = 18
        age_3 = 60
        if (age < age_2)
        {
            console.log("You don't have acess cause your age is " + age + ". It's less then ")
        }
        else if (age >= age_2 && age < age_3) 
        {
            console.log("Welcome!")
        }
        else if (age > age_3)
        {
            console.log("Keep calm and look Culture channel")
        }
        else 
        {
            console.log("Technical work")
        }} 
}

CheckAge()

