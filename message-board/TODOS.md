
# TODOs

## 1. The date of each message is shown as a timestamp (unix epoch), convert that to a readable format...

Tip: check the `MessageList.jsx` file, use `(new Date(timestamp)).toISOString()` to format the timestamp.

## 2. Prevent sending empty messages...

Tip: edit 'onSubmit' on `MessageForm.jsx` to not call the handler when the text is empty.

## 3. Prevent saving configuration with empty username...

Tip: edit 'onSubmit' on `ConfigurationForm.jsx` to not call the handler when the username is empty.

## 4. MessageList and App are very simple components without state, change them to function components...

Tip: check the `MessageList.jsx` file, imitate the Message component.

## 5. Implement the cancel button on the ConfigurationFrom...

Tip: pass the 'onClick' handler up the tree and implement a function that closes the configuration without saving.

## 6. While the configuration panel is open, disable the message form...

Tip: pass `this.state.isConfigOpen` to MessageForm and then set the `disabled` prop of the input and button.

## 7. Move the utility functions on `Main.jsx` to a utils file...

Tip: just move the functions `utils.js` export them and import on the `Main.jsx`.

## 8. Implement the Hide button...

Tip: check the `MessageList.jsx` file, notice that Message already has the onHide handler, pass that up the tree to the Main and implement a function that removes a the message from the state.
