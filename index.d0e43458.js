function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(t,n){if(t){if("string"==typeof t)return e(t,void 0);var r=Object.prototype.toString.call(t).slice(8,-1);if("Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(t,void 0)}}(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var n,r,o,a,c=document.querySelector("table"),i="ASC",l=null,u=null;document.querySelector("thead").addEventListener("click",function(e){var n=t(c.tHead.rows[0].cells),r=n.find(function(t){return t===e.target});if(r){var o=n.indexOf(r),a=c.querySelector("tbody"),u=t(a.rows);l===o?i="ASC"===i?"DESC":"ASC":(i="ASC",l=o),u.sort(function(e,t){var n=e.cells[o].textContent.trim(),r=t.cells[o].textContent.trim();if(/\$/.test(n)){var a=parseFloat(n.replace(/[^\d.-]/g,"")),c=parseFloat(r.replace(/[^\d.-]/g,""));return"ASC"===i?a-c:c-a}return"ASC"===i?n.localeCompare(r):r.localeCompare(n)}),a.innerHTML="",u.forEach(function(e){return a.appendChild(e)})}}),document.querySelector("tbody").addEventListener("click",function(e){t(c.querySelector("tbody").rows).forEach(function(t){t.contains(e.target)?t.classList.add("active"):t.classList.remove("active")})}),n=document.createElement("form"),r=["Tokyo","Singapore","London","New York","Edinburgh","San Francisco"],n.classList.add("new-employee-form"),(o=t(c.tHead.rows[0].cells).map(function(e){return e.textContent.toLowerCase()})).forEach(function(e){var t,o;(o=document.createElement("label")).textContent="".concat(e.charAt(0).toUpperCase()+e.slice(1),": "),"office"===e?(t=document.createElement("select"),r.forEach(function(e){var n=document.createElement("option");n.value=e,n.textContent=e,t.appendChild(n)})):(t=document.createElement("input"),"age"===e||"salary"===e?t.type="number":t.type="text"),t.setAttribute("data-qa",e),t.name=e,t.required=!0,o.appendChild(t),n.appendChild(o)}),(a=document.createElement("button")).textContent="Save to table",a.type="submit",n.appendChild(a),document.body.appendChild(n),n.addEventListener("submit",function(e){e.preventDefault();var t,r,a,i={};new FormData(n).forEach(function(e,t){"salary"===t?i[t]="$".concat(parseFloat(e).toLocaleString("en-US")):i[t]=e});var l=i.name.length<4?"Name value has less than 4 letters":i.age<18||i.age>90?"Age value is less than 18 or more than 90":null;if((t=document.querySelector(".notification"))&&t.remove(),r=document.createElement("div"),a=document.createElement("h2"),r.classList.add("notification"),r.setAttribute("data-qa","notification"),l?(r.classList.add("error"),r.textContent=l,a.textContent="Error"):(r.classList.add("success"),r.textContent="A new employee is successfully added to the table",a.textContent="Success"),r.prepend(a),document.body.appendChild(r),setTimeout(function(){r.remove()},5e3),!l){var u=c.querySelector("tbody").insertRow();o.forEach(function(e){u.insertCell().textContent=i[e]}),n.reset()}}),document.querySelector("tbody").addEventListener("dblclick",function(e){var t=function(e){var t=e.querySelector("input").value.trim();""===t?e.textContent=r:/\$/.test(r)?e.textContent="$".concat(parseFloat(t).toLocaleString("en-US")):e.textContent=t,u=null},n=e.target;if("TD"===n.tagName){u&&u!==n&&t(u),u=n;var r=n.textContent,o=document.createElement("input");o.classList.add("cell-input"),o.value=r,n.textContent="",n.appendChild(o),o.focus(),o.addEventListener("blur",function(){t(n)}),o.addEventListener("keypress",function(e){"Enter"===e.key&&t(n)})}});
//# sourceMappingURL=index.d0e43458.js.map