import math

def repcountgen(workoutname, defaul_rep = 6,maxweight=80, warmup=3, workingset=3):
    """Generate a warmups and repcoungsfrom input for an exercise

    Args:
        maxweight (int, optional): Max weight in pounds. Defaults to 80.
        warmup (int, optional): How much warmup sets do you need
    """
    def myround(x, base=5):
       return base * math.floor(x/base) 
    
    workout_reps={}
    workout_reps["Workout"] = workoutname
    
    # formula will have to change depending on which workout goal
    worksetrep= (maxweight*0.90)/(1.1**warmup)
    for i in range(1, warmup+1):
        workout_reps["warm-up #"+str(i)+ " reps"] = defaul_rep+(warmup-i)*2
        workout_reps["warm-up #"+str(i)+ " weight(lbs)" ] = myround(worksetrep*(1.1**(i)))

    
    for j in range(1, workingset+1):
        workout_reps["working sets #"+str(j)+ " reps"] = defaul_rep
        workout_reps["working sets #"+str(j)+ " weight(lbs)" ] = myround(worksetrep)
    
    return workout_reps


if __name__ == "__main__":
    print(repcountgen("bench press"))
    print(repcountgen("squats", 10, 225, 5))