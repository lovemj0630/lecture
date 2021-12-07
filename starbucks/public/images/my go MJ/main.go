package main

// func main() {
// 	var number = 2
// 	if number == 1 {
// 		fmt.Println("하나")
// 	} else if number == 2 {
// 		fmt.Println("둘")
// 	} else {
// 		fmt.Println("셋")
// 	}
// }

// func main() {
// 	i := 10
// 	if number := i * 2; number < 30 {
// 		println(number)
// 	}
// }
// import "fmt"

// func main() {
// 	number := 3
// 	switch number {
// 	case 1:
// 		fmt.Println("하나")
// 	case 2:
// 		fmt.Println("둘")
// 	case 3:
// 		fmt.Println("셋")
// 	default:
// 		fmt.Println("없음")
// 	}
// }

// import "fmt"

// func main() {
// 	number := 3
// 	switch {
// 	case number == 1:
// 		fmt.Println("하나")
// 	case number == 2:
// 		fmt.Println("둘")
// 	case number == 3:
// 		fmt.Println("셋")
// 	default:
// 		fmt.Println("없음")
// 	}
// }

import "fmt"

// func main() {
// 	number := 3

// 	switch number {
// 	case 2, 4, 6:
// 		fmt.Println("짝수")
// 	case 1, 3, 5:
// 		fmt.Println("홀수")
// 	default:
// 		fmt.Println("없는 숫자")
// 	}
// }

func main() {
	var i = 1
	switch number := i * 2; {
	case number == 1:
		fmt.Println("하나")
	case number == 2:
		fmt.Println("둘")
	case number == 3:
		fmt.Println("셋")
	default:
		fmt.Println("Other")
	}
}
