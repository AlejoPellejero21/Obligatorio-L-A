
// Cambiar foto de perfil
function onChangeProfilePicture(){

const FirstProfilePicture = getQuerySelector('#',"first-profile-icon",true)
const SecondProfilePicture = getQuerySelector('#',"second-profile-icon",true)
const ThirdProfilePicture = getQuerySelector('#',"third-profile-icon",true)
const FourthProfilePicture = getQuerySelector('#',"fourth-profile-icon",true)

console.log(OBJ1Selector.ProfilePictureSelector)

let ProfilePictureSelectorValue = OBJ1Selector.ProfilePictureSelector.value 

switch (ProfilePictureSelectorValue) {
    case "first-profile-icon":
        setDisplay(FirstProfilePicture, true)
        setDisplay(SecondProfilePicture, false)
        setDisplay(ThirdProfilePicture, false)
        setDisplay(FourthProfilePicture, false)
        break;
    case "second-profile-icon":
        setDisplay(FirstProfilePicture, false)
        setDisplay(SecondProfilePicture, true)
        setDisplay(ThirdProfilePicture, false)
        setDisplay(FourthProfilePicture, false)
        break;
    case "third-profile-icon":
        setDisplay(FirstProfilePicture, false)
        setDisplay(SecondProfilePicture, false)
        setDisplay(ThirdProfilePicture, true)
        setDisplay(FourthProfilePicture, false)
        break;
    case "fourth-profile-icon":
        setDisplay(FirstProfilePicture, false)
        setDisplay(SecondProfilePicture, false)
        setDisplay(ThirdProfilePicture, false)
        setDisplay(FourthProfilePicture, true)
        break;    
}
}