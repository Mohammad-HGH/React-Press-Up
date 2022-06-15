"use strict";(self.webpackChunkblog_project=self.webpackChunkblog_project||[]).push([[77],{72077:function(e,o,t){t.r(o);t(72791);var r=t(73528),n=t.n(r),a=t(11799),m=t.n(a),i=t(54483),s=t(53174),l=t(58875),c=t(87546),p=t(506),d=t(87066),u=t(66787),h=t(30002),F=t(28496),x=t(80184);o.default=function(){return(0,x.jsx)("article",{children:(0,x.jsxs)(l.Z,{className:"px-0",children:[(0,x.jsx)(c.Z,{className:"d-flex flex-wrap flex-md-nowrap align-items-center py-4",children:(0,x.jsxs)(p.Z,{className:"d-block mb-4 mb-md-0",children:[(0,x.jsx)("h1",{className:"h2",children:"Forms"}),(0,x.jsx)("p",{className:"mb-0",children:"Use form elements such as text inputs, textareas, file uploads and many more to get input from you users."})]})}),(0,x.jsx)(F.Z,{title:"Example",description:(0,x.jsxs)("p",{children:["Form elements are an important part of the UI to receive text input from the users. The ",(0,x.jsx)("code",{children:"<Form>"})," component can be used to create forms, form groups, labels, and input elements inside the UI. Check out the following example for a simple email input field and a textarea field:"]}),scope:{Form:d.Z},imports:"import { Form } from '@themesberg/react-bootstrap';",example:'<Form>\n  <Form.Group className="mb-3">\n    <Form.Label>Email address</Form.Label>\n    <Form.Control type="email" placeholder="name@example.com" />\n  </Form.Group>\n  <Form.Group className="mb-3">\n    <Form.Label>Example textarea</Form.Label>\n    <Form.Control as="textarea" rows="3" />\n  </Form.Group>\n</Form>'}),(0,x.jsx)(F.Z,{title:"Input fields with icon",description:(0,x.jsxs)("p",{children:["You can also add icons to the left or right side of the input field by using the ",(0,x.jsx)("code",{children:"<InputGroup>"})," component and using the ",(0,x.jsx)("code",{children:"<InputGroup.Text>"})," element with an icon element inside it, either after or before the ",(0,x.jsx)("code",{children:"<Form.Control>"})," element."]}),scope:{Form:d.Z,InputGroup:u.Z,FontAwesomeIcon:i.G,faSearch:s.wn1},imports:'import { Form, InputGroup } from \'@themesberg/react-bootstrap\';\nimport { FontAwesomeIcon } from "@fortawesome/react-fontawesome";\nimport { faSearch } from "@fortawesome/free-solid-svg-icons";',example:'<Form>\n  <Form.Group className="mb-3">\n    <Form.Label>Icon Left</Form.Label>\n    <InputGroup>\n      <InputGroup.Text><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>\n      <Form.Control type="text" placeholder="Search" />\n    </InputGroup>\n  </Form.Group>\n  <Form.Group className="mb-3">\n    <Form.Label>Icon Right</Form.Label>\n    <InputGroup>\n      <Form.Control type="text" placeholder="Search" />\n      <InputGroup.Text><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>\n    </InputGroup>\n  </Form.Group>\n</Form>'}),(0,x.jsx)(F.Z,{title:"Validation",description:(0,x.jsxs)("p",{children:["You can easily update the styles of a valid or invalid styles input field by using the ",(0,x.jsx)("code",{children:"isValid"})," or ",(0,x.jsx)("code",{children:"isInvalid"})," attributes. Additionally, you can use the ",(0,x.jsx)("code",{children:"<Form.Control.Feedback>"})," component to write the message regarding the success or error message."]}),scope:{Form:d.Z},imports:"import { Form } from '@themesberg/react-bootstrap';",example:'<Form>\n  <Form.Group className="mb-3">\n    <Form.Label>Username</Form.Label>\n    <Form.Control required isInvalid type="text" />\n    <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>\n  </Form.Group>\n  <Form.Group className="mb-3">\n    <Form.Label>First name</Form.Label>\n    <Form.Control required isValid type="text" defaultValue="Mark" />\n    <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>\n  </Form.Group>\n</Form>'}),(0,x.jsx)(F.Z,{title:"Select input",description:(0,x.jsxs)("p",{children:["The ",(0,x.jsx)("code",{children:"<Form.Select>"})," component can be used for option selection from the user. You can use the ",(0,x.jsx)("code",{children:"<option>"})," elements to add multiple options and use the ",(0,x.jsx)("code",{children:"defaultValue"})," attribute to set the default value of the select field."]}),scope:{Form:d.Z},imports:"import { Form } from '@themesberg/react-bootstrap';",example:'<Form>\n  <Form.Group className="mb-3">\n    <Form.Label>Example select</Form.Label>\n    <Form.Select>\n      <option defaultValue>Open this select menu</option>\n      <option>One</option>\n      <option>Two</option>\n      <option>Three</option>\n    </Form.Select>\n  </Form.Group>\n</Form>'}),(0,x.jsx)(F.Z,{title:"Multiple select",description:"",scope:{Form:d.Z},imports:"import { Form } from '@themesberg/react-bootstrap';",example:'<Form>\n  <Form.Group className="mb-3">\n    <Form.Label>Example multiple select</Form.Label>\n    <Form.Select multiple>\n      <option defaultValue>Open this select menu</option>\n      <option>One</option>\n      <option>Two</option>\n      <option>Three</option>\n    </Form.Select>\n  </Form.Group>\n</Form>'}),(0,x.jsx)(F.Z,{title:"Textarea",description:(0,x.jsxs)("p",{children:["You can create a textarea input field by adding the ",(0,x.jsx)("code",{children:'as="textarea"'})," modifier attribute to the ",(0,x.jsx)("code",{children:"<Form.Control>"})," component."]}),scope:{Form:d.Z},imports:"import { Form } from '@themesberg/react-bootstrap';",example:'<Form>\n  <Form.Group>\n    <Form.Label>Example textarea</Form.Label>\n    <Form.Control as="textarea" rows="4" placeholder="Enter your message..." />\n  </Form.Group>\n</Form>'}),(0,x.jsx)(F.Z,{title:"File upload",description:(0,x.jsxs)("p",{children:["If you want to use an input field to upload files, you need to add the ",(0,x.jsx)("code",{children:'type="file"'})," attribute to the ",(0,x.jsx)("code",{children:"<Form.Control>"})," component."]}),scope:{Form:d.Z},imports:"import { Form } from '@themesberg/react-bootstrap';",example:'<Form>\n  <Form.Control type="file" />\n</Form>'}),(0,x.jsx)(F.Z,{title:"Checkboxes",description:(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("p",{children:["Use the ",(0,x.jsx)("code",{children:"<Form.Check>"})," component to create checkbox items. If you want to disable on them, you need to add the ",(0,x.jsx)("code",{children:"disabled"})," attribute."]}),(0,x.jsxs)("p",{children:["Make sure the is a ",(0,x.jsx)("code",{children:'id="*"'})," and ",(0,x.jsx)("code",{children:'htmlFor="*"'})," attribute for each element so that clicking on the text will also toggle the element."]})]}),scope:{Form:d.Z},imports:"import { Form } from '@themesberg/react-bootstrap';",example:'<Form>\n  <Form.Check label="Default checkbox" id="checkbox1" htmlFor="checkbox1" />\n  <Form.Check disabled label="Disabled checkbox" id="checkbox2" htmlFor="checkbox2" />\n</Form>'}),(0,x.jsx)(F.Z,{title:"Radio buttons",description:(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("p",{children:["If you want to use radio buttons, you need to use the ",(0,x.jsx)("code",{children:"<Form.Check>"})," component with the ",(0,x.jsx)("code",{children:'type="radio"'})," modifier. You can disable the element by using the ",(0,x.jsx)("code",{children:"disabled"})," attribute."]}),(0,x.jsxs)("p",{children:["Make sure the is a ",(0,x.jsx)("code",{children:'id="*"'})," and ",(0,x.jsx)("code",{children:'htmlFor="*"'})," attribute for each element so that clicking on the text will also toggle the element."]})]}),scope:{Form:d.Z},imports:"import { Form } from '@themesberg/react-bootstrap';",example:'<Form>\n  <fieldset>\n    <Form.Check\n      defaultChecked\n      type="radio"\n      defaultValue="option1"\n      label="Default radio"\n      name="exampleRadios"\n      id="radio1"\n      htmlFor="radio1"\n      />\n\n    <Form.Check\n      type="radio"\n      defaultValue="option2"\n      label="Second default radio"\n      name="exampleRadios"\n      id="radio2"\n      htmlFor="radio2"\n      />\n\n    <Form.Check\n      disabled\n      type="radio"\n      defaultValue="option3"\n      label="Disabled radio"\n      name="exampleRadios"\n      id="radio3"\n      htmlFor="radio3"\n      />\n  </fieldset>\n</Form>'}),(0,x.jsx)(F.Z,{title:"Datepicker",description:(0,x.jsxs)("p",{children:["Use the ",(0,x.jsx)("code",{children:"<Datetime>"})," component to use a datepicker as an input field. You can read more about the options that you can use for this component by reading the ",(0,x.jsx)(h.Z.Link,{href:"https://www.npmjs.com/package/react-datetime",target:"_blank",children:"react-datetime"})," documentation."]}),scope:{Datetime:m(),Form:d.Z,InputGroup:u.Z,FontAwesomeIcon:i.G,faCalendarAlt:s.IV4,moment:n()},imports:'import React, { useState } from "react";\nimport { Form, InputGroup } from \'@themesberg/react-bootstrap\';\nimport Datetime from "react-datetime";\nimport moment from "moment-timezone";\n\nimport { FontAwesomeIcon } from "@fortawesome/react-fontawesome";\nimport { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";',example:'const Datepicker = () => {\n  const [birthday, setBirthday] = React.useState("");\n\n  return(\n    <Form>\n      <Form.Group className="mb-3">\n        <Datetime\n          timeFormat={false}\n          closeOnSelect={false}\n          onChange={setBirthday}\n          renderInput={(props, openCalendar) => (\n            <InputGroup>\n              <InputGroup.Text><FontAwesomeIcon icon={faCalendarAlt} /></InputGroup.Text>\n              <Form.Control\n                required\n                type="text"\n                value={birthday ? moment(birthday).format("MM/DD/YYYY") : ""}\n                placeholder="mm/dd/yyyy"\n                onFocus={openCalendar}\n                onChange={() => { }} />\n            </InputGroup>\n          )} />\n      </Form.Group>\n    </Form>\n  );\n}\n\nrender( <Datepicker /> )'})]})})}}}]);
//# sourceMappingURL=77.0418a046.chunk.js.map