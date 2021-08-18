def std_weight(height, gender):
    if gender == "남자":
        weight = pow(height * 0.01, 2) * 22
    else:
        weight = pow(height * 0.01, 2) * 21
    print(f"키 {height}cm {gender}의 표준 체중은 {round(weight,2)}kg 입니다.")

std_weight(175, "남자")