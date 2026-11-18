let num=18;//global
console.log(num)//accessed from outside of the fxn
function display(){
    console.log(num)//inside the fxn
    let num3=39;
    // console.log(num2)
    //can't accessed inside num2
    if(num){
        let num2=20;
        console.log(num)//inside if block
        console.log(num2)//20
        console.log(num3)//39
    }
    //console.log(num2)
    console.log(num3)//now this is fxn scoped 
    //so will give output39
}
display()


// ==========================================
// 1. MODULE-LEVEL CONSTANT (Read-only config)
// ==========================================
const MIN_LEGAL_AGE = 18;

// ==========================================
// 2. PURE FUNCTION (Explicit parameters, no hidden globals)
// ==========================================
export function validateUserAccess(userAge) {
    // Function-scoped variable (available throughout validateUserAccess)
    const baseRole = "GUEST";

    if (userAge >= MIN_LEGAL_AGE) {
        // Block-scoped variable (exists ONLY inside this 'if' block)
        const verifiedStatus = "VERIFIED_ADULT";
        
        return {
            age: userAge,
            role: baseRole,
            status: verifiedStatus
        };
    }

    // 'verifiedStatus' is NOT accessible here (prevents accidental data leaks)
    return {
        age: userAge,
        role: baseRole,
        status: "RESTRICTED_MINOR"
    };
}

// ==========================================
// 3. EXECUTION
// ==========================================
console.log(validateUserAccess(22)); // { age: 22, role: 'GUEST', status: 'VERIFIED_ADULT' }
console.log(validateUserAccess(15)); // { age: 15, role: 'GUEST', status: 'RESTRICTED_MINOR' }

