import {
    // Assets,
    // moveIn,
    // moveOut,
    narration,
    // newChoiceOption,
    // newCloseChoiceOption,
    newLabel,
    showImage,
    showImageContainer,
} from "@drincs/pixi-vn";
import { james, mc, sly, steph } from "../../values/characters";

// const steph_fullname = "Stephanie";

const bedroom = newLabel("bedroom", [
    async () => {
        await showImage("bg", "bedroom_day");
        await showImageContainer("steph", ["fm02-body", "fm02-eyes-wow", "fm02-mouth-nervous00"]);
        narration.dialogue = `She enters my room before I'VE even had a chance to.`;
    },
    async () => {
        await showImageContainer("steph", ["fm02-body", "fm02-eyes-joy", "fm02-mouth-smile00"]);
        narration.dialogGlue = true;
        narration.dialogue = `\n\n...I could've just come back and gotten the platter later...`;
    },
    async () => {
        await showImageContainer("james", ["m01-body", "m01-eyes-smile", "m01-mouth-grin00"]);
        narration.dialogue = `She sets it on a desk. I throw my two paper bags down beside the empty bed.`;
    },
    async () => {
        await showImageContainer("james", ["m01-body", "m01-eyes-smile", "m01-mouth-smile00"]);
        await showImageContainer("steph", ["fm02-body", "fm02-eyes-joy", "fm02-mouth-smile01"]);
        narration.dialogue = { character: steph, text: `They got you a new mattress, right?` };
    },
    async () => {
        await showImageContainer("steph", ["fm02-body", "fm02-eyes-nervous", "fm02-mouth-nervous01"]);
        narration.dialogGlue = true;
        narration.dialogue = `That last guy was a druggie, did ${james.name} tell you that?`;
    },
    async () => {
        await showImageContainer("james", ["m01-body", "m01-eyes-grin", "m01-mouth-grin00"]);
        await showImageContainer("sly", ["fm01-body", "fm01-eyes-grin", "fm01-mouth-smile01"]);
        await showImageContainer("steph", ["fm02-body", "fm02-eyes-wow", "fm02-mouth-nervous00"]);
        narration.dialogue = { character: sly, text: `*We're* the reason he got expelled!` };
    },
    async () => {
        await showImageContainer("sly", ["fm01-body", "fm01-eyes-grin", "fm01-mouth-grin00"]);
        await showImageContainer("steph", ["fm02-body", "fm02-eyes-wow", "fm02-mouth-upset01"]);
        narration.dialogue = { character: steph, text: `${sly.name}! If word gets out about that...` };
    },
    async () => {
        await showImageContainer("sly", ["fm01-body", "fm01-eyes-smile", "fm01-mouth-grin00"]);
        await showImageContainer("steph", ["fm02-body", "fm02-eyes-smile", "fm02-mouth-nervous01"]);
        narration.dialogGlue = true;
        narration.dialogue = `well, actually, it wouldn't matter, *he's* the one who shot himself up.`;
    },
    async () => {
        await showImageContainer("james", ["m01-body", "m01-eyes-smile", "m01-mouth-grin00"]);
        await showImageContainer("sly", ["fm01-body", "fm01-eyes-smile", "fm01-mouth-smile00"]);
        await showImageContainer("steph", ["fm02-body", "fm02-eyes-joy", "fm02-mouth-smile00"]);
        narration.dialogue = `I'm fumbling for a new subject.`;
    },
    async () => {
        await showImageContainer("james", ["m01-body", "m01-eyes-smile", "m01-mouth-smile00"]);
        await showImageContainer("sly", ["fm01-body", "fm01-eyes-smile", "fm01-mouth-serious00"]);
        await showImageContainer("steph", ["fm02-body", "fm02-eyes-wow", "fm02-mouth-nervous00"]);
        narration.dialogue = { character: mc, text: `So, you're all family?` };
    },
    async () => {
        await showImageContainer("james", ["m01-body", "m01-eyes-smile", "m01-mouth-grin00"]);
        await showImageContainer("sly", ["fm01-body", "fm01-eyes-smile", "fm01-mouth-serious01"]);
        narration.dialogue = `I realize too late`;
    },
    async () => {
        await showImageContainer("sly", ["fm01-body", "fm01-eyes-smile", "fm01-mouth-serious00"]);
        narration.dialogGlue = true;
        narration.dialogue = `this topic is no better:`;
    },
    async () => {
        await showImageContainer("james", ["m01-body", "m01-eyes-grin", "m01-mouth-grin00"]);
        await showImageContainer("sly", ["fm01-body", "fm01-eyes-smile", "fm01-mouth-smile01"]);
        await showImageContainer("steph", ["fm02-body", "fm02-eyes-joy", "fm02-mouth-smile00"]);
        narration.dialogue = { character: sly, text: `Adopted family.` };
    },
    async () => {
        await showImageContainer("james", ["m01-body", "m01-eyes-smile", "m01-mouth-grin00"]);
        await showImageContainer("sly", ["fm01-body", "fm01-eyes-smile", "fm01-mouth-smile00"]);
        await showImageContainer("steph", ["fm02-body", "fm02-eyes-joy", "fm02-mouth-smile01"]);
        narration.dialogue = {
            character: steph,
            text: `${sly.name} and I were best friends growing up and ${james.name} here needed a mama, so ${sly.name} adopted him!`,
        };
    },
    async () => {
        await showImageContainer("james", ["m01-body", "m01-eyes-smile", "m01-mouth-smile01"]);
        await showImageContainer("sly", ["fm01-body", "fm01-eyes-smile", "fm01-mouth-serious00"]);
        await showImageContainer("steph", ["fm02-body", "fm02-eyes-smile", "fm02-mouth-smile00"]);
        narration.dialogue = { character: james, text: `We're not actually related.` };
    },
    async () => {
        await showImageContainer("james", ["m01-body", "m01-eyes-smile", "m01-mouth-grin00"]);
        await showImageContainer("sly", ["fm01-body", "fm01-eyes-upset", "fm01-mouth-upset00"]);
        narration.dialogue = { character: mc, text: `...` };
    },
    async () => {
        await showImageContainer("james", ["m01-body", "m01-eyes-grin", "m01-mouth-smile01"]);
        await showImageContainer("sly", ["fm01-body", "fm01-eyes-smile", "fm01-mouth-serious00"]);
        await showImageContainer("steph", ["fm02-body", "fm02-eyes-joy", "fm02-mouth-smile00"]);
        narration.dialogue = {
            character: james,
            text: `Yeah, I like to say that this last semester I was in *foster care*`,
        };
    },
    async () => {
        narration.dialogGlue = true;
        narration.dialogue = `and ${sly.name} picked me up somewhere in there.`;
    },
    async () => {
        await showImageContainer("james", ["m01-body", "m01-eyes-annoy", "m01-mouth-smile00"]);
        await showImageContainer("sly", ["fm01-body", "fm01-eyes-smile", "fm01-mouth-smile01"]);
        narration.dialogue = { character: sly, text: `${james.name} is just a baby. A freshman like you!` };
    },
    async () => {
        await showImageContainer("james", ["m01-body", "m01-eyes-annoy", "m01-mouth-annoy01"]);
        await showImageContainer("sly", ["fm01-body", "fm01-eyes-upset", "fm01-mouth-upset00"]);
        await showImageContainer("steph", ["fm02-body", "fm02-eyes-wow", "fm02-mouth-nervous00"]);
        narration.dialogue = { character: james, text: `And *you're* just a sophomore!` };
    },
    async () => {
        await showImageContainer("james", ["m01-body", "m01-eyes-wow", "m01-mouth-wow01"]);
        await showImageContainer("sly", ["fm01-body", "fm01-eyes-upset", "fm01-mouth-wow01"]);
        narration.dialogue = {
            character: sly,
            text: `I went to medical school for two years before coming here, I think that counts as *at least* 6 years!`,
        };
    },
    async () => {
        await showImageContainer("james", ["m01-body", "m01-eyes-smile", "m01-mouth-grin00"]);
        await showImageContainer("sly", ["fm01-body", "fm01-eyes-upset", "fm01-mouth-upset00"]);
        await showImageContainer("steph", ["fm02-body", "fm02-eyes-joy", "fm02-mouth-upset00"]);
        narration.dialogue = `I'm dizzy, and my blood's rushing.`;
    },
    async () => {
        await showImageContainer("sly", ["fm01-body", "fm01-eyes-smile", "fm01-mouth-serious00"]);
        await showImageContainer("steph", ["fm02-body", "fm02-eyes-nervous", "fm02-mouth-nervous00"]);
        narration.dialogue = { character: mc, text: `Um... why did you switch degrees?` };
    },
    async () => {
        await showImageContainer("james", ["m01-body", "m01-eyes-smile", "m01-mouth-smile00"]);
        await showImageContainer("sly", ["fm01-body", "fm01-eyes-smile", "fm01-mouth-serious01"]);
        await showImageContainer("steph", ["fm02-body", "fm02-eyes-smile", "fm02-mouth-nervous00"]);
        narration.dialogue = { character: sly, text: `My mom was all in the medical field,` };
    },
    async () => {
        await showImageContainer("steph", ["fm02-body", "fm02-eyes-smile", "fm02-mouth-smile00"]);
        narration.dialogGlue = true;
        narration.dialogue = `and since I'm great with kids- I had 6-`;
    },
    async () => {
        await showImageContainer("james", ["m01-body", "m01-eyes-grin", "m01-mouth-annoy00"]);
        await showImageContainer("sly", ["fm01-body", "fm01-eyes-wow", "fm01-mouth-upset01"]);
        await showImageContainer("steph", ["fm02-body", "fm02-eyes-nervous", "fm02-mouth-nervous00"]);
        narration.dialogue = { character: james, text: `They were actually her siblings.` };
    },
    async () => {
        await showImageContainer("james", ["m01-body", "m01-eyes-smile", "m01-mouth-neutral00"]);
        await showImageContainer("sly", ["fm01-body", "fm01-eyes-upset", "fm01-mouth-upset01"]);
        await showImageContainer("steph", ["fm02-body", "fm02-eyes-wow", "fm02-mouth-nervous00"]);
        narration.dialogue = { character: sly, text: `Yeah, whatever.` };
    },
    async () => {
        await showImageContainer("james", ["m01-body", "m01-eyes-grin", "m01-mouth-grin00"]);
        await showImageContainer("sly", ["fm01-body", "fm01-eyes-smile", "fm01-mouth-serious01"]);
        await showImageContainer("steph", ["fm02-body", "fm02-eyes-nervous", "fm02-mouth-smile00"]);
        narration.dialogGlue = true;
        narration.dialogue = `I tried it because I thought I'd love it,`;
    },
    async () => {
        await showImageContainer("sly", ["fm01-body", "fm01-eyes-upset", "fm01-mouth-upset01"]);
        narration.dialogGlue = true;
        narration.dialogue = `but I HATED it!`;
    },
    async () => {
        await showImageContainer("sly", ["fm01-body", "fm01-eyes-smile", "fm01-mouth-serious01"]);
        await showImageContainer("steph", ["fm02-body", "fm02-eyes-joy", "fm02-mouth-smile00"]);
        narration.dialogGlue = true;
        narration.dialogue = `When we started getting into anatomy, I realized how *gross* the whole thing is. I changed diapers,`;
    },
    async () => {
        await showImageContainer("james", ["m01-body", "m01-eyes-grin", "m01-mouth-annoy00"]);
        narration.dialogGlue = true;
        narration.dialogue = `but that's a little different from changing *livers*, know what I mean?`;
    },
    async () => {
        await showImageContainer("james", ["m01-body", "m01-eyes-smile", "m01-mouth-annoy00"]);
        await showImageContainer("sly", ["fm01-body", "fm01-eyes-smile", "fm01-mouth-serious00"]);
        await showImageContainer("steph", ["fm02-body", "fm02-eyes-nervous", "fm02-mouth-nervous00"]);
        narration.dialogue = { character: mc, text: `...` };
    },
    async () => {
        await showImageContainer("james", ["m01-body", "m01-eyes-smile", "m01-mouth-smile00"]);
        await showImageContainer("sly", ["fm01-body", "fm01-eyes-grin", "fm01-mouth-smile01"]);
        await showImageContainer("steph", ["fm02-body", "fm02-eyes-smile", "fm02-mouth-smile00"]);
        narration.dialogue = { character: sly, text: `So I'm trying out architecture now.` };
    },
    async () => {
        await showImageContainer("sly", ["fm01-body", "fm01-eyes-smile", "fm01-mouth-smile01"]);
        narration.dialogGlue = true;
        narration.dialogue = `What are you going for, ${mc.name}?`;
    },
    async () => {
        await showImageContainer("sly", ["fm01-body", "fm01-eyes-smile", "fm01-mouth-smile00"]);
        await showImageContainer("steph", ["fm02-body", "fm02-eyes-nervous", "fm02-mouth-nervous00"]);
        narration.dialogue = { character: mc, text: `...uh... ...just getting my Gen Eds out of the way right now...` };
    },
    async () => {
        await showImageContainer("james", ["m01-body", "m01-eyes-smile", "m01-mouth-neutral00"]);
        await showImageContainer("sly", ["fm01-body", "fm01-eyes-smile", "fm01-mouth-smile01"]);
        await showImageContainer("steph", ["fm02-body", "fm02-eyes-nervous", "fm02-mouth-smile00"]);
        narration.dialogue = { character: sly, text: `Why not do that at a community college?` };
    },
    async () => {
        await showImageContainer("sly", ["fm01-body", "fm01-eyes-smile", "fm01-mouth-smile00"]);
        await showImageContainer("steph", ["fm02-body", "fm02-eyes-nervous", "fm02-mouth-smile01"]);
        narration.dialogue = { character: steph, text: `Did you get a full ride or something?` };
    },
    async () => {
        await showImageContainer("steph", ["fm02-body", "fm02-eyes-nervous", "fm02-mouth-smile00"]);
        narration.dialogue = { character: mc, text: `...yeah...` };
    },
    async () => {
        await showImageContainer("james", ["m01-body", "m01-eyes-smile", "m01-mouth-smile00"]);
        await showImageContainer("steph", ["fm02-body", "fm02-eyes-nervous", "fm02-mouth-nervous00"]);
        narration.dialogue = `I knew this wouldn't go anywhere good.`;
    },
    async () => {
        await showImageContainer("sly", ["fm01-body", "fm01-eyes-smile", "fm01-mouth-smile01"]);
        narration.dialogue = { character: sly, text: `Are you going to go visit your parents on the weekend?` };
    },
    async () => {
        await showImageContainer("sly", ["fm01-body", "fm01-eyes-smile", "fm01-mouth-smile00"]);
        narration.dialogue = { character: mc, text: `... .... ..` };
    },
    async () => {
        await showImageContainer("sly", ["fm01-body", "fm01-eyes-smile", "fm01-mouth-serious00"]);
        narration.dialogGlue = true;
        narration.dialogue = `.... ..... ..... ... ... ..`;
    },
    async () => {
        await showImageContainer("james", ["m01-body", "m01-eyes-grin", "m01-mouth-smile01"]);
        await showImageContainer("sly", ["fm01-body", "fm01-eyes-smile", "fm01-mouth-serious01"]);
        await showImageContainer("steph", ["fm02-body", "fm02-eyes-joy", "fm02-mouth-smile00"]);
        narration.dialogue = { character: james, text: `It's no worry if you don't,` };
    },
    async () => {
        await showImageContainer("sly", ["fm01-body", "fm01-eyes-smile", "fm01-mouth-serious00"]);
        narration.dialogGlue = true;
        narration.dialogue = `mine drive me crazy so I stay here.`;
    },
    async () => {
        // let slyImage = await showImageContainer("sly", ["fm01-body", "fm01-eyes-smile", "fm01-mouth-serious00"])
        await showImageContainer("james", ["m01-body", "m01-eyes-smile", "m01-mouth-grin00"]);
        await showImageContainer("sly", ["fm01-body", "fm01-eyes-upset", "fm01-mouth-smile01"]);
        await showImageContainer("steph", ["fm02-body", "fm02-eyes-nervous", "fm02-mouth-smile00"]);
        narration.dialogue = {
            character: sly,
            text: `You've gotta live close by, right? Nobody comes to this college from afar, sorry, we're just not that hot of a scene.`,
        };
    },
    async () => {
        await showImageContainer("james", ["m01-body", "m01-eyes-annoy", "m01-mouth-annoy01"]);
        await showImageContainer("sly", ["fm01-body", "fm01-eyes-smile", "fm01-mouth-smile00"]);
        narration.dialogue = { character: james, text: `At least, now that *Sven's*` };
    },
    async () => {
        await showImageContainer("steph", ["fm02-body", "fm02-eyes-wow", "fm02-mouth-upset00"]);
        narration.dialogGlue = true;
        narration.dialogue = `gone.`;
    },
    async () => {
        await showImageContainer("james", ["m01-body", "m01-eyes-wow", "m01-mouth-annoy00"]);
        await showImageContainer("sly", ["fm01-body", "fm01-eyes-smile", "fm01-mouth-smile00"]);
        await showImageContainer("steph", ["fm02-body", "fm02-eyes-wow", "fm02-mouth-upset01"]);
        narration.dialogue = { character: steph, text: `${james.name}! You don't have to refer to him by name!!` };
    },
    async () => {
        await showImageContainer("james", ["m01-body", "m01-eyes-smile", "m01-mouth-neutral01"]);
        await showImageContainer("sly", ["fm01-body", "fm01-eyes-smile", "fm01-mouth-serious00"]);
        await showImageContainer("steph", ["fm02-body", "fm02-eyes-wow", "fm02-mouth-upset00"]);
        narration.dialogue = { character: james, text: `Why? ${mc.name}'ll never meet him.` };
    },
    async () => {
        await showImageContainer("james", ["m01-body", "m01-eyes-smile", "m01-mouth-neutral00"]);
        await showImageContainer("steph", ["fm02-body", "fm02-eyes-joy", "fm02-mouth-nervous01"]);
        narration.dialogue = { character: steph, text: `Say, ${mc.name}, where's the rest of your luggage?` };
    },
    async () => {
        await showImageContainer("steph", ["fm02-body", "fm02-eyes-nervous", "fm02-mouth-nervous00"]);
        narration.dialogue = { character: mc, text: `...` };
    },
    async () => {
        await showImageContainer("james", ["m01-body", "m01-eyes-smile", "m01-mouth-smile01"]);
        await showImageContainer("sly", ["fm01-body", "fm01-eyes-smile", "fm01-mouth-serious01"]);
        await showImageContainer("steph", ["fm02-body", "fm02-eyes-nervous", "fm02-mouth-smile00"]);
        narration.dialogue = { character: james, text: `Is that all your luggage?` };
    },
    async () => {
        await showImageContainer("james", ["m01-body", "m01-eyes-concern", "m01-mouth-neutral01"]);
        await showImageContainer("sly", ["fm01-body", "fm01-eyes-smile", "fm01-mouth-serious00"]);
        await showImageContainer("steph", ["fm02-body", "fm02-eyes-wow", "fm02-mouth-upset00"]);
        narration.dialogGlue = true;
        narration.dialogue = `Man, that sucks.`;
    },
    async () => {
        await showImageContainer("james", ["m01-body", "m01-eyes-smile", "m01-mouth-smile00"]);
        await showImageContainer("steph", ["fm02-body", "fm02-eyes-upset", "fm02-mouth-nervous00"]);
        narration.dialogue = { character: mc, text: `...` };
    },
    async () => {
        await showImageContainer("steph", ["fm02-body", "fm02-eyes-wow", "fm02-mouth-nervous00"]);
        narration.dialogue = { character: mc, text: `So, what snacks did you bring?` };
    },
    async () => {
        await showImageContainer("james", ["m01-body", "m01-eyes-wow", "m01-mouth-neutral00"]);
        await showImageContainer("sly", ["fm01-body", "fm01-eyes-smile", "fm01-mouth-serious01"]);
        await showImageContainer("steph", ["fm02-body", "fm02-eyes-wow", "fm02-mouth-wow01"]);
        narration.dialogue = { character: steph, text: `Oh!` };
    },
    async () => {
        await showImageContainer("james", ["m01-body", "m01-eyes-smile", "m01-mouth-grin00"]);
        await showImageContainer("sly", ["fm01-body", "fm01-eyes-smile", "fm01-mouth-serious00"]);
        await showImageContainer("steph", ["fm02-body", "fm02-eyes-joy", "fm02-mouth-smile01"]);
        narration.dialogue = `She opens the tray. Inside are cookies, brownies, candies, a pie, cake pieces...`;
    },
    async () => {
        await showImageContainer("james", ["m01-body", "m01-eyes-grin", "m01-mouth-smile01"]);
        await showImageContainer("sly", ["fm01-body", "fm01-eyes-smile", "fm01-mouth-smile00"]);
        await showImageContainer("steph", ["fm02-body", "fm02-eyes-joy", "fm02-mouth-smile00"]);
        narration.dialogGlue = true;
        narration.dialogue = `${james.name} quickly grabs a few.`;
    },
    async () => {
        await showImageContainer("james", ["m01-body", "m01-eyes-grin", "m01-mouth-smile00"]);
        await showImageContainer("sly", ["fm01-body", "fm01-eyes-smile", "fm01-mouth-smile01"]);
        narration.dialogGlue = true;
        narration.dialogue = `${sly.name} takes some too.`;
    },
    async () => {
        await showImageContainer("james", ["m01-body", "m01-eyes-smile", "m01-mouth-smile00"]);
        await showImageContainer("sly", ["fm01-body", "fm01-eyes-smile", "fm01-mouth-smile00"]);
        narration.dialogue = { character: mc, text: `How do you bake all this?!` };
    },
    async () => {
        await showImageContainer("james", ["m01-body", "m01-eyes-smile", "m01-mouth-smile00"]);
        await showImageContainer("steph", ["fm02-body", "fm02-eyes-joy", "fm02-mouth-smile01"]);
        narration.dialogue = {
            character: steph,
            text: `Baking helps me relax. It's really no work for me, and it's a good way to unwind!`,
        };
    },
    async () => {
        await showImageContainer("steph", ["fm02-body", "fm02-eyes-smile", "fm02-mouth-smile00"]);
        narration.dialogue = { character: mc, text: `...I had to do all the cooking as a kid.` };
    },
    async () => {
        await showImageContainer("james", ["m01-body", "m01-eyes-grin", "m01-mouth-smile00"]);
        await showImageContainer("sly", ["fm01-body", "fm01-eyes-smile", "fm01-mouth-serious00"]);
        narration.dialogue = `...did I just let that slip?`;
    },
    async () => {
        await showImageContainer("james", ["m01-body", "m01-eyes-smile", "m01-mouth-smile00"]);
        await showImageContainer("sly", ["fm01-body", "fm01-eyes-smile", "fm01-mouth-serious01"]);
        await showImageContainer("steph", ["fm02-body", "fm02-eyes-joy", "fm02-mouth-smile00"]);
        narration.dialogue = { character: steph, text: `Awesome!` };
    },
    async () => {
        await showImageContainer("sly", ["fm01-body", "fm01-eyes-smile", "fm01-mouth-serious00"]);
        narration.dialogGlue = true;
        narration.dialogue = `Maybe we can swap recipes sometime!`;
    },
    async () => {
        await showImageContainer("steph", ["fm02-body", "fm02-eyes-joy", "fm02-mouth-smile01"]);
        narration.dialogGlue = true;
        narration.dialogue = `*Did you know you can make cake in a microwave?!?!*`;
    },
    async () => {
        await showImageContainer("james", ["m01-body", "m01-eyes-grin", "m01-mouth-smile00"]);
        await showImageContainer("sly", ["fm01-body", "fm01-eyes-upset", "fm01-mouth-serious00"]);
        await showImageContainer("steph", ["fm02-body", "fm02-eyes-nervous", "fm02-mouth-smile00"]);
        narration.dialogue = `They can see I'm stressing out. I push it all down.`;
    },
    async () => {
        await showImageContainer("james", ["m01-body", "m01-eyes-smile", "m01-mouth-neutral00"]);
        await showImageContainer("sly", ["fm01-body", "fm01-eyes-smile", "fm01-mouth-smile01"]);
        await showImageContainer("steph", ["fm02-body", "fm02-eyes-wow", "fm02-mouth-nervous00"]);
        narration.dialogue = { character: sly, text: `...It's fine to be scared.` };
    },
    async () => {
        await showImageContainer("sly", ["fm01-body", "fm01-eyes-smile", "fm01-mouth-smile00"]);
        narration.dialogue = { character: mc, text: `?!` };
    },
    async () => {
        await showImageContainer("sly", ["fm01-body", "fm01-eyes-smile", "fm01-mouth-serious01"]);
        narration.dialogue = {
            character: sly,
            text: `I know you're an adult now, but it's okay to be scared. You don't have to feel ashamed of feeling. It's okay to feel.`,
        };
    },
    async () => {
        await showImageContainer("james", ["m01-body", "m01-eyes-grin", "m01-mouth-smile00"]);
        await showImageContainer("sly", ["fm01-body", "fm01-eyes-smile", "fm01-mouth-serious00"]);
        await showImageContainer("steph", ["fm02-body", "fm02-eyes-smile", "fm02-mouth-nervous00"]);
        narration.dialogue = `...they have no idea. But I'm glad.`;
    },
    async () => {
        await showImageContainer("james", ["m01-body", "m01-eyes-grin", "m01-mouth-grin00"]);
        await showImageContainer("sly", ["fm01-body", "fm01-eyes-smile", "fm01-mouth-smile01"]);
        await showImageContainer("steph", ["fm02-body", "fm02-eyes-nervous", "fm02-mouth-smile00"]);
        narration.dialogue = { character: sly, text: `...that's right.` };
    },
    async () => {
        await showImageContainer("james", ["m01-body", "m01-eyes-grin", "m01-mouth-smile01"]);
        await showImageContainer("sly", ["fm01-body", "fm01-eyes-smile", "fm01-mouth-smile00"]);
        narration.dialogue = { character: james, text: `...who told you you're a scary guy, ${mc.name}?` };
    },
    async () => {
        await showImageContainer("sly", ["fm01-body", "fm01-eyes-smile", "fm01-mouth-serious00"]);
        await showImageContainer("steph", ["fm02-body", "fm02-eyes-smile", "fm02-mouth-smile00"]);
        narration.dialogGlue = true;
        narration.dialogue = `You don't seem scary at all.`;
    },
    () => {
        narration.dialogue = { character: mc, text: `My mom.` };
    },
    async () => {
        await showImageContainer("james", ["m01-body", "m01-eyes-smile", "m01-mouth-neutral00"]);
        await showImageContainer("sly", ["fm01-body", "fm01-eyes-wow", "fm01-mouth-serious01"]);
        await showImageContainer("steph", ["fm02-body", "fm02-eyes-wow", "fm02-mouth-nervous00"]);
        narration.dialogue = `I just said that.`;
    },
    async () => {
        await showImageContainer("sly", ["fm01-body", "fm01-eyes-wow", "fm01-mouth-serious00"]);
        narration.dialogGlue = true;
        narration.dialogue = `Why?`;
    },
    async () => {
        await showImageContainer("sly", ["fm01-body", "fm01-eyes-upset", "fm01-mouth-serious00"]);
        narration.dialogue = `Crap. Crap crap crap. Why am I crying?`;
    },
    async () => {
        await showImageContainer("steph", ["fm02-body", "fm02-eyes-wow", "fm02-mouth-nervous01"]);
        narration.dialogue = { character: steph, text: `Are you okay?` };
    },
    async () => {
        await showImageContainer("steph", ["fm02-body", "fm02-eyes-wow", "fm02-mouth-nervous00"]);
        narration.dialogue = `${sly.name} comes over and sits down beside me. She locks eyes with me.`;
    },
    async () => {
        await showImageContainer("james", ["m01-body", "m01-eyes-concern", "m01-mouth-concern00"]);
        await showImageContainer("sly", ["fm01-body", "fm01-eyes-upset", "fm01-mouth-serious01"]);
        await showImageContainer("steph", ["fm02-body", "fm02-eyes-nervous", "fm02-mouth-nervous00"]);
        narration.dialogue = { character: sly, text: `...why are you scary?` };
    },
    async () => {
        await showImageContainer("sly", ["fm01-body", "fm01-eyes-upset", "fm01-mouth-serious00"]);
        narration.dialogue = { character: mc, text: `...` };
    },
    async () => {
        await showImageContainer("james", ["m01-body", "m01-eyes-wow", "m01-mouth-annoy00"]);
        await showImageContainer("sly", ["fm01-body", "fm01-eyes-upset", "fm01-mouth-serious01"]);
        await showImageContainer("steph", ["fm02-body", "fm02-eyes-wow", "fm02-mouth-nervous00"]);
        narration.dialogue = { character: sly, text: `Is that why your parents sent you here?` };
    },
    async () => {
        await showImageContainer("james", ["m01-body", "m01-eyes-wow", "m01-mouth-annoy01"]);
        await showImageContainer("sly", ["fm01-body", "fm01-eyes-upset", "fm01-mouth-serious00"]);
        narration.dialogue = { character: james, text: `${sly.name}!` };
    },
    async () => {
        await showImageContainer("james", ["m01-body", "m01-eyes-wow", "m01-mouth-neutral00"]);
        await showImageContainer("sly", ["fm01-body", "fm01-eyes-upset", "fm01-mouth-serious00"]);
        narration.dialogue = { character: mc, text: `...` };
    },
    async () => {
        await showImageContainer("james", ["m01-body", "m01-eyes-concern", "m01-mouth-concern00"]);
        await showImageContainer("steph", ["fm02-body", "fm02-eyes-nervous", "fm02-mouth-nervous01"]);
        narration.dialogue = {
            character: steph,
            text: `...I can't imagine being told by your own *mother* you're scary.`,
        };
    },
    async () => {
        await showImageContainer("sly", ["fm01-body", "fm01-eyes-smile", "fm01-mouth-serious00"]);
        await showImageContainer("steph", ["fm02-body", "fm02-eyes-nervous", "fm02-mouth-nervous00"]);
        narration.dialogue = { character: mc, text: `...` };
    },
    async () => {
        await showImageContainer("james", ["m01-body", "m01-eyes-smile", "m01-mouth-concern00"]);
        await showImageContainer("steph", ["fm02-body", "fm02-eyes-joy", "fm02-mouth-nervous01"]);
        narration.dialogue = { character: steph, text: `...but if you really *were*, I suspect you wouldn't be here.` };
    },
    async () => {
        await showImageContainer("james", ["m01-body", "m01-eyes-concern", "m01-mouth-smile01"]);
        await showImageContainer("sly", ["fm01-body", "fm01-eyes-smile", "fm01-mouth-upset00"]);
        await showImageContainer("steph", ["fm02-body", "fm02-eyes-nervous", "fm02-mouth-smile00"]);
        narration.dialogue = { character: james, text: `...Right?` };
    },
    async () => {
        await showImageContainer("james", ["m01-body", "m01-eyes-smile", "m01-mouth-smile00"]);
        await showImageContainer("sly", ["fm01-body", "fm01-eyes-smile", "fm01-mouth-serious00"]);
        narration.dialogue = `I think this is the beginning of what people call...`;
    },
    () => {
        narration.dialogue = `...freedom...`;
    },
    () => {
        narration.dialogue = `Like, even though it'll be hard, maybe I could actually be open here.`;
    },
    async () => {
        await showImageContainer("james", ["m01-body", "m01-eyes-smile", "m01-mouth-smile00"]);
        await showImageContainer("sly", ["fm01-body", "fm01-eyes-grin", "fm01-mouth-grin00"]);
        await showImageContainer("steph", ["fm02-body", "fm02-eyes-joy", "fm02-mouth-smile01"]);
        narration.dialogue = `...freedom...`;
    },
]);
export default bedroom;