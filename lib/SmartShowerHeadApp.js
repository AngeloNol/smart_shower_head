// Use this sample to create your own voice commands
intent('hello world', p => {
    p.play('(hello|hi there)');
});


// Give Alan some knowledge about the world
intent('Hey Alan, is it going to rain today?', p => {
    p.play("The probability of rain is 90 percent");
})

intent('Hey Alan, call 911.', p => {
    p.play("Calling 911.");
    p.play({command:"Emergency Call"});
})

intent('Hey Alan, play leave the door open by silk sonic.', p => {
    p.play("Playing leave the door Open by silk sonic on spotify.");
})
