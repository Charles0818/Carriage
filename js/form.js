
const countries = [
    "Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas"
	,"Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands"
	,"Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica"
	,"Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea"
	,"Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana"
	,"Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India"
	,"Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia"
	,"Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania"
	,"Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia"
	,"New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal"
	,"Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles"
	,"Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan"
	,"Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia"
	,"Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay"
	,"Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"
];

const contactType = document.querySelectorAll('.contact.col-2');
const toggleBtn = document.querySelectorAll('.btn[data-toggle]');
let countriesOption = '';
countries.forEach(el =>{
    countriesOption += `<option value='${el}'>${el}</option>
    `
});
contactType.forEach(el => {
    if(el.hasAttribute('data-business')) {
        el.innerHTML += `
        <form class="contact--form" method="POST">
            <div class="row">
                <div class="field--block">
                    <label for="fname">First name</label>
                    <input type="text" id="fname" class="form--type" name="firstName" required>
                </div>
                <div class="field--block">
                    <label for="lname">Last name</label>
                    <input type="text" id="lname" class="form--type" name="LastName" required>
                </div>
            </div>
            <div class="row">
                <label for="email">Email</label>
                <input type="email" id="email" class="form--type" name="email" required>
            </div>
            <div class="row">
                <label for="company">Company</label>
                <input type="text" id="company" class="form--type" name="company" required>
            </div>
            <div class="row">
                <label for="country">Country</label>
                <select id="country" class="form--type" name="country" required>
                    ${countriesOption}
                </select>
            </div>
            <div class="row">
                <label for="">How can we help you?</label>
                <select id="purpose_of_contact" class="form--type" name="purpose_of_contact" required>
                    <option value="Get a Partner Account">Get a Partner Account</option>
                    <option value="Get training">Get training</option>
                    <option value="I'm interested in learning more about partnering">
                        I'm interested in learning more about partnering
                    </option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div class="row">
                <label for="description">Tell us about your project:</label>
                <textarea id="description" class="form--type" name="description"></textarea>
            </div>
            <input id="check" type="checkbox" required>
            <label for="check">I agree to the Terms of Service & Privacy Policy</label>
            <input type="submit" value="Submit">
        </form>
        `
    }
    else if(el.hasAttribute('data-partnership')) {
        el.innerHTML += `
        <form class="contact--form" method="POST">
        <div class="row">
            <div class="field--block">
                <label for="fname">First name</label>
                <input type="text" id="fname" class="form--type" name="firstName" required>
            </div>
            <div class="field--block">
                <label for="lname">Last name</label>
                <input type="text" id="lname" class="form--type" name="LastName" required>
            </div>
        </div>
        <div class="row">
            <label for="email">Email</label>
            <input type="email" id="email" class="form--type" name="email" required>
        </div>
        <div class="row">
            <label for="company">Company</label>
            <input type="text" id="company" class="form--type" name="company" required>
        </div>
        <div class="row">
            <label for="country">Country</label>
            <select id="country" class="form--type" name="country" required>
                ${countriesOption}
            </select>
        </div>
        <div class="row">
            <label for="">How can we help you?</label>
            <select id="purpose_of_contact" class="form--type" name="purpose_of_contact" required>
                <option value="Get a Partner Account">Get a Partner Account</option>
                <option value="Get training">Get training</option>
                <option value="I'm interested in learning more about partnering">
                    I'm interested in learning more about partnering
                </option>
                <option value="Other">Other</option>
            </select>
        </div>
        <div class="row">
            <label for="description">Tell us about your project:</label>
            <textarea id="description" class="form--type" name="description"></textarea>
        </div>
        <input id="check" type="checkbox" required>
        <label for="check">I agree to the Terms of Service & Privacy Policy</label>
        <input type="submit" value="Submit">
    </form>
    `
        
    }
    else if(el.hasAttribute('data-support')){
        el.innerHTML += `
        <form class="contact--form" method="POST">
        <div class="row">
            <div class="field--block">
                <label for="fname">First name</label>
                <input type="text" id="fname" class="form--type" name="firstName" required>
            </div>
            <div class="field--block">
                <label for="lname">Last name</label>
                <input type="text" id="lname" class="form--type" name="LastName" required>
            </div>
        </div>
        <div class="row">
            <label for="email">Email</label>
            <input type="email" id="email" class="form--type" name="email" required>
        </div>
        <div class="row">
            <label for="company">Company</label>
            <input type="text" id="company" class="form--type" name="company" required>
        </div>
        <div class="row">
            <label for="country">Country</label>
            <select id="country" class="form--type" name="country" required>
                ${countriesOption}
            </select>
        </div>
        <div class="row">
            <label for="">How can we help you?</label>
            <select id="purpose_of_contact" class="form--type" name="purpose_of_contact" required>
                <option value="Get a Partner Account">Get a Partner Account</option>
                <option value="Get training">Get training</option>
                <option value="I'm interested in learning more about partnering">
                    I'm interested in learning more about partnering
                </option>
                <option value="Other">Other</option>
            </select>
        </div>
        <div class="row">
            <label for="description">Tell us about your project:</label>
            <textarea id="description" class="form--type" name="description"></textarea>
        </div>
        <input id="check" type="checkbox" required>
        <label for="check">I agree to the Terms of Service & Privacy Policy</label>
        <input type="submit" value="Submit">
    </form>
    `
    }
})



class Toggle {
    static toggleContact(contactType, textContent, toggleBtn, index, event){  
        contactType.forEach((el, index) => {
            el.querySelector(textContent).style.animation = 'slide-to-left .5s ease 0s 1 backwards';
            el.querySelector('form').style.animation = 'fade-in 1s ease 0s 1 forwards';
            el.dataset.slide = index + 1;
            console.log(el.dataset.slide)
            el.style.display = 'none';
            
        });
        toggleBtn.forEach(el => el.parentElement.classList.remove('active'));
        contactType[index].style.display="flex";
        console.log(contactType[index]);
        event.target.parentElement.classList.add('active');
    }

    static toggleForm(flipCard, toggleCard){
        
    }

};

toggleBtn.forEach((el, index) => {
    el.addEventListener('click', (event) => {
        Toggle.toggleContact(contactType,'.desc', toggleBtn, index, event);
        console.log(event.target.parentElement);
    });
});

const flipCard = document.querySelector('.flip-card');
document.querySelectorAll('flip-card .toggle').forEach(el => {
    el.addEventListener('click', (event)=> {
        flipCard.style.transform = 'rotateY(180deg)';
        console.log(event.target);
    })
})  

class validation {
    static flagFieldIfInvalid(field, isValid) {
        if(isValid) {
            field.classList.remove('invalid');
            field.nextElementSibling.style.visibility = 'hidden';
        } else{
            field.classList.add('invalid');
            field.nextElementSibling.style.visibility = 'visible';
        };
    }
    static telNumberIsValid(field) {
        const pattern = /^\d$/;
        const isValid = pattern.test(field.value);
        flagFieldIfInvalid(field, isValid);
        return isValid;
    };

    static emailFieldIsValid(field) {
        const pattern = '';
        const isValid = pattern.test(field.value);
        flagFieldIfInvalid(field, isValid);
        return isValid;

    };

    static validateUserName(field){
        const pattern ='';
        const isValid = pattern.test(field.value);
        flagFieldIfInvalid(field, isValid);
    }

    validateFormFields() {
        this.prototype.emailFieldIsValid();
        this.prototype.telNumberIsValid();
        this.prototype.validateUserName();
    };

};



