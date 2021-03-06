/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * Hear a Martha Gellhorn Quote with this alexa skill
 * This skill supports English language.
 **/

'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = undefined;

const languageStrings = {
    'en': {
        translation: {
            QUOTES: [
                "I tell you loneliness is the thing to master. Courage and fear, love, death are only parts of it and can easily be ruled afterwards. If I make myself master my own loneliness there will be peace or safety: and perhaps these are the same.",
                "The only way I can pay back for what fate and society have handed me is to try, in minor totally useless ways, to make an angry sound against injustice.",
                "War happens to people, one by one. That is really all I have to say and it seems to me I have been saying it forever. Unless they are immediate victims, the majority of mankind behaves as if war was an act of God which could not be prevented; or they behave as if war elsewhere was none of their business. It would be a bitter cosmic joke if we destroy ourselves due to atrophy of the imagination.",
                "Nothing is better for self-esteem than survival.",
                "I know enough to know that no woman should ever marry a man who hated his mother.",
                "Why do people talk of the horrors of old age? It's great. I feel like a fine old car with the parts gradually wearing out, but I'm not complaining,... Those who find growing old terrible are people who haven't done what they wanted with their lives.",
                "A broken heart is such a shabby thing, like poverty and failure and the incurable diseases which are also deforming. I hate it and am ashamed of it, and I must somehow repair this heart and put it back into its normal condition, as a tough somewhat scarred but operating organ.",
                "What the trees can do handsomely-greening and flowering, fading and then the falling of leaves-human beings cannot do with dignity, let alone without pain.",
                "Life is not long at all, never long enough, but days are very long indeed.",
                "the ends never justify the means because IT never ends.",
                "Gradually I came to realize that people will more readily swallow lies than truth, as if the taste of lies was homey, appetizing: a habit.",
                "travel is compost for the mind",
                "Here one has the perfect example of justice: the men have kept their women enslaved...stupid and limited and apart, for their male vanity and power; result: the dull women bore the daylights out of the men.",
                "If I were a first rate writer, I wouldn't mind a bit. What does depress me is this: it is so desperately hard and so obsessive and so lonely to write that, in return for all this work, one would like a little self satisfaction. And that is never going to come, for the simple reason that I do not deserve it. I cannot be a good enough writer. You see? I call it grim. But the future looks awfully clear to me",
                "Citizenship is a tough occupation which obliges the citizen to make his own informed opinion and stand by it",
                "I feel terribly strange, like a shadow, and full of dread. I dread the time ahead, the amputating time, I do not see how to manage it. I do not want the world to go dark and narrow and mean, and the world has been very unlovely in my eyes, and I very unlovely in it…",
                "And this urge to run away from what I love is a sort of sadism I no longer pretend to understand.",
                "My kind of loneliness now has no cure, you know; it is something I expect to live with until I die. Friends are heavenly kind, sometimes fun; it would be fatal not to have them. But I by no means need or want daily contact; perhaps it takes as much out of me as it gives, perhaps takes more.",
                "It is much harder to be lonely, when you have for a while stopped being lonely. I was used to having only myself, cold and hard as that is; I could live with it. And now I wait, for a voice, a face, a body, that is not going to be here, is not mine, does not in any case wait as I do, nor share this homesickness. […] How to explain that I taught myself to be tough and indifferent, because it mattered too much and learned not even to weep in my mind not to notice.",
                "Italy was about churches, Greece it's ruins; but Israel was about surviving and about feeling glad.",
                "I wait every year for summer, and it is usually good, but it is never as good as that summer I am always waiting for.",
                "On the night of New Year’s Day, I thought of a wonderful New Year’s resolution for the men who run the world: get to know the people who only live in it.",
                "I love you. Have a hell of a good time. I don’t really know what else is worth having.",
                "No wars, in the war-logged record of our species, have been terminal. Until now, when we know that nuclear war would be the death of our planet. It is beyond belief that any governments–those brief political figures–arrogate to themselves the right to stop history, at their discretion.",
                "People do not yet realize (because the mind isn't built that way) what war can be. They fear it but surely they fear it the way children fear nightmares, dimly, without definite images in their heads of how it will all work out.",
                "I took only one suitcase, and a cosmetics case for medicines but I was worried about books. Solitude is all right with books, awful without.",
                "And though various organizations in America and England collected money and sent food parcels to these refugees, nothing was ever received by the Spanish.",
                "I see mysteries and complications wherever I look, and I have never met a steadily logical person.",
                "I daresay I was the worst bed partner in five continents.",
                "People do not yet realize (because the mind isn't built that way) what war can be. They fear it but surely they fear it the way children fear nightmares, dimly, without definite images in their heads of how it will all work out.",
                "It is high time that I learn to be more careful about hope, a reckless emotion for travelers. The sensible approach would be to the expect the worst, the very worst, that way you avoid grievous disappointment and who knows with a tiny bit of luck, you might even have a moderately pleasant surprise, like the difference between hell and purgatory.",
                "In Warsaw, you also remember that you are in a Communist-controlled country, though by all accounts the control is now humane and lenient, judged by what it was and what it is in other satellite countries. Still you do hear the incompetent echo in the tapped hotel telephone, you do notice that people look over their shoulders when talking in restaurants - the secret police are dormant but not forgotten; you feel in your bones, as you would a threatening change in the weather, every change in Russian mood or action. This is not and air we have ever breathed; I doubt if we would be strong enough to resist such a climate and stay as healthy in spirit as the Poles",
                "I had a sudden notion of why history is such a mess: humans do not live long enough. We only learn from experience and have no time to use it in a continuous and sensible way.",
                "But the soul concerns me; and I am beginning to wonder whether it is wise or useful to spend so much time searching for one’s own.",
                "No wars, in the war-logged record of our species, have been terminal. Until now, when we know that nuclear war would be the death of our planet. It is beyond belief that any governments–those brief political figures–arrogate to themselves the right to stop history, at their discretion.",
                "It is much harder to be lonely, when you have for a while stopped being lonely. I was used to having only myself, cold and hard as that is; I could live with it. And now I wait, for a voice, a face, a body, that is not going to be here, is not mine, does not in any case wait as I do, nor share this homesickness. How to explain that I taught myself to be tough and indifferent, because it mattered too much and learned not even to weep in my mind not to notice.",
                "My kind of loneliness now has no cure, you know; it is something I expect to live with until I die. Friends are heavenly kind, sometimes fun; it would be fatal not to have them. But I by no means need or want daily contact; perhaps it takes as much out of me as it gives, perhaps takes more.",
                "And this urge to run away from what I love is a sort of sadism I no longer pretend to understand.",
                "I feel terribly strange, like a shadow, and full of dread. I dread the time ahead, the amputating time, I do not see how to manage it. I do not want the world to go dark and narrow and mean, and the world has been very unlovely in my eyes, and I very unlovely in it…",
                "If there is a war, then all of the things most of us do won't matter any more. I have a feeling that one has to work all day and all night and live too, and swim and get the sun one's hair and laugh and love as many people as one can find around and do this all terribly fast, because the time getting shorter and shorter every day",
                "Endurance was the Chinese secret weapon. The Japanese should have understood that, and everybody else had better remember it.",
                "What was new to our ears these days, and thrilling to hear, was the steadiness and justice of those who spoke, the abscence of panic and exaggeration the quiet insistence on legal processes as opposed to trial by suspicion. McCarthyism so repelled the English that they take special care not to be infected by it.",
                "The English are very proud of their Parliament, and week in, week out, century after century, they have pretty good cause to be.",
                ".. none had been outside Russia. I kept trying to remember something that I had read about a species of fish that was born, lived, spawned, died in the dark waters of a cave; and were blind.",
                "A dock worker from East Ham also spoke of freedom. 'You'll never find the English going Communist' he said. 'We don't like it. It's not true Communism, it dictatorial. We want to say what we think. I'm a republican myself and I don't like the Royal Family. They all look as if a good day's work would kill them'.",
                "He had no other life and no other knowledge; he knew that he could not live anywhere now because in his mind, slyly, there was nothing but horror.",
                "What gave these krauts a right to say who should be born and who shouldn't, and who could live and be let alone, and who would get caught and killed?",
                "Politics really must be a rotten profession considering what awful moral cowards most politicians become as soon as they get the job.",
                "I felt both puny and pretentious, trying to write in the grandeur of that natural world where everything was older than time and I was the briefest object in the landscape.",
                "Always delighted to grab any privileges I can get, I don’t like the sense of being privileged by law.",
                "The latrine broke my lion heart.",
                "Our hearts are light and gay because now its happening, we're starting, we're travelling again.",
                "I do not hope for a world at peace, all of it, all the time. I do not believe in the perfectibility of man, which is what would be required for world peace; I only believe in the human race. I believe the human race must continue.",
                "Impatience leading swiftly to boredom is my vice, not panic.",
                "Since I am devoted to my own freedom, I didn’t think it just to deny other people theirs; and a basic freedom must be to be bossed by your own kind, not by foreigners."
            ],
            SKILL_NAME: 'Martha Gellhorn Quotes',
            GET_QUOTE_MESSAGE: "Here's your Martha Gellhorn quote: ",
            HELP_MESSAGE: 'You can say "Alexa ask Martha Gellhorn Quotes to tell me a quote," or, you can say exit.',
            HELP_REPROMPT: 'You can say"Alexa ask Martha Gellhorn Quotes to tell me a quote"',
            STOP_MESSAGE: 'Goodbye!',
        },
    }
};

const handlers = {
    'marthaGellhornQuotes': function () {
        this.emit('GetQuote');
    },
    'marthaGellhornQuotes': function () {
        this.emit('GetQuote');
    },
    'GetQuote': function () {
        // Get a random quote from the list
        // Use this.t() to get corresponding language data
        const quoteArr = this.t('QUOTES');
        const quoteIndex = Math.floor(Math.random() * quoteArr.length);
        const randomQuote = quoteArr[quoteIndex];

        // Create speech output
        const speechOutput = this.t('GET_QUOTE_MESSAGE') + randomQuote;
        this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'), randomQuote);
    },
    'AboutSkill': function () {
        this.emit('GetAboutSkill');
    },
    'GetAboutSkill': function () {
        const speechOutput = "Martha Ellis Gellhorn was an American novelist, travel writer, and journalist who is considered one of the great war correspondents of the 20th century. She reported on virtually every major world conflict that took place during her 60-year career.";
        this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'), speechOutput);
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = this.t('HELP_MESSAGE');
        const reprompt = this.t('HELP_REPROMPT');
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'Unhandled': function () {
        this.emit('AMAZON.HelpIntent');
    },
};

exports.handler = function (event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
