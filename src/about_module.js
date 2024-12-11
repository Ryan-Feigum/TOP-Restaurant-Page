function loadAboutModule() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = ``;
    const newDiv = document.createElement('div')
    newDiv.innerHTML = `
                <form style="text-align:center" action="#" method="post">
                <div>
                    <label id="nameLabel" for="name" >Name:</label>
                    <input id="name" for="name" type="text"/>
                </div>
                <div>
                    <label id="emailLabel" for="email">Email:</label>
                    <input id="email" for="email" type="text"/>
                </div>
                <div>
                    <label id="phoneLabel" for="phone">Phone:</label>
                    <input id="phone" for="phone" type="text"/>
                </div>
                <div>
                    <label id="reasonLabel" for="reason">Reason for Inquiry:</label>
                    <select>
                        <option value="catering">
                            Catering (default)
                        </option>
                        <option value="privateParty">
                            Private Party
                        </option>
                        <option value="feedback">
                            Feedback
                        </option>
                        <option value="other">
                            Other
                        </option>    
                    </select>                
                </div>
                <div>
                    <label id="addInfoLabel" for="addInfo">Additional Information:</label>
                    <textarea></textarea>
                </div>
                <div>
                    <label id="visitedLabel" for="visited">Have you been to the restaurant?</label>
                    <input id="yes" name="yes" value="yes" type="radio" checked/>
                    <label id="yesLabel" for="yes">Yes</label>
                    <input id="no" name="no" value="no" type="radio"/>
                    <label id="noLabel" for="no">No</label>          
                </div>
                <div>
                    <label id="bestDaysLabel" for="bestDays">Best days to contact you:</label>
                    <input id="m" name="m" value="m" type="checkbox"/>
                    <label id="mLabel" for="m">M</label>
                    <input id="t" name="t" value="t" type="checkbox"/>
                    <label id="tLabel" for="t">T</label>
                    <input id="w" name="w" value="w" type="checkbox"/>
                    <label id="wLabel" for="w">W</label>
                    <input id="th" name="th" value="th" type="checkbox"/>
                    <label id="thLabel" for="th">Th</label>
                    <input id="f" name="f" value="f" type="checkbox"/>
                    <label id="fLabel" for="f">F</label>
                </div>
                <div>
                    <input id="submit" name="submit" value="Send Request" type="submit"/>
                </div>
            </form>

            <hr>`;

    contentDiv.appendChild(newDiv);

    // Debugging to ensure module is loaded upon button click
    console.log("Module loaded");
};

export { loadAboutModule };