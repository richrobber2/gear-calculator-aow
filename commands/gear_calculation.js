module.exports = {
	name: 'gear',
	description: 'calculate gear base stats.',
    args: true,
	execute(message, args) {
		if (args[0] === 'help') {
			return message.channel.send(`For optional enter "nothing" if you don't want to use it\n.gear (FistStat) (optional: SecondStat) (current level) (optional: level you want your gear to be)`);
        }
        if (args[0] === undefined) {
            stat1 = null
            return message.channel.send('i need at least 1 stat use command .help for more info\n');
        }
        if (args[3] === undefined) {
            args[3] = null;
        }
        if (args[1] === "nothing") {
			args[1] = null
        }
        if (args[2] === undefined) {
			return message.channel.send('i need the level you want your gear to be');
        }
        if(args[0] >= -9999999999) {
           args[0] = args[0] / (1 + (args[2] / 10));
        }
        if(args[1] >= -9999999999) {
            args[1] = args[1] / (1 + (args[2] / 10));
         }
        if (args[3] >= 1) {
            stats = (args[0] / 10) * args[3] + args[0]
            stats1 = (args[1] / 10) * args[3] + args[1]
        }
        message.channel.send(`Stat 1# base stats: ${args[0]} \nStat 2# base stats: ${args[1]}\n\nStats at level: ${args[3]}\n\nStat #1: ${stats}\nStat #2: ${stats1}`);
	},
};