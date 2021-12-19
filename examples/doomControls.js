import {EventDispatcher} from "../build/three.module.js";

export class DoomControls extends EventDispatcher{

    constructor(object) {
        super();


        this.object = object;

        // Set to false to disable this control
        this.enabled = true;

        this.canStrafe = true;
        this.canBarrelroll = true;
        this.canFly = true;
        this.canLookUpDown = true;

        this.moveSpeed = 4;
        this.rotateSpeed = Math.PI/100;


        let status = {
            "W" : false,
            "S" : false,
            "A" : false,
            "D" : false,
            "Q" : false,
            "E" : false,
            "UP" : false,
            "DOWN" : false,
            "LEFT" : false,
            "RIGHT" : false,
            "SPACE" : false,
            "SHIFT" : false
        }
        function handleKeyDown(e){
            switch (e.code) {
                //PERMET DE DEPLACER LA object DANS LE PLAN
                case 'KeyW':
                    status.W = true;
                    break;
                case 'KeyA':
                    status.A = true;
                    break;
                case 'KeyS':
                    status.S = true;
                    break;
                case 'KeyD':
                    status.D = true;
                    break;

                //PERMET DE TOURNER LA object DANS LE PLAN
                case 'ArrowUp':
                    status.UP = true;
                    break;
                case 'ArrowLeft':
                    status.LEFT = true;
                    break;
                case 'ArrowDown':
                    status.DOWN = true;
                    break;
                case 'ArrowRight':
                    status.RIGHT = true;
                    break;
                case 'KeyQ':
                    status.Q = true;
                    break;
                case 'KeyE':
                    status.E = true;
                    break;


                //PERMET DE MONTER ET DESCENDRE DANS LE PLAN
                case 'Space':
                    status.SPACE = true;
                    break;
                case 'ShiftLeft':
                    status.SHIFT = true;
                    break;
            }
        };
        function handleKeyUp(e){
            switch (e.code) {
                //PERMET DE DEPLACER LA object DANS LE PLAN

                case 'KeyW':
                    status.W = false;
                    break;
                case 'KeyA':
                    status.A = false;
                    break;

                case 'KeyS':
                    status.S = false;
                    break;
                case 'KeyD':
                    status.D = false;
                    break;

                //PERMET DE TOURNER LA object DANS LE PLAN
                case 'ArrowUp':
                    status.UP = false;
                    break;
                case 'ArrowLeft':
                    status.LEFT = false;
                    break;
                case 'ArrowDown':
                    status.DOWN = false;
                    break;
                case 'ArrowRight':
                    status.RIGHT = false;
                    break;
                case 'KeyQ':
                    status.Q = false;
                    break;
                case 'KeyE':
                    status.E = false;
                    break;


                //PERMET DE MONTER ET DESCENDRE DANS LE PLAN
                case 'Space':
                    status.SPACE = false;
                    break;
                case 'ShiftLeft':
                    status.SHIFT = false;
                    break;

            }
        };

        document.addEventListener("keydown",handleKeyDown);
        document.addEventListener("keyup",handleKeyUp);


        this.update = function () {
            if (status.W) this.object.translateZ(-this.moveSpeed);
            if (status.A && this.canStrafe) this.object.translateX(-this.moveSpeed);
            if (status.S) this.object.translateZ(this.moveSpeed);
            if (status.D && this.canStrafe) this.object.translateX(this.moveSpeed);

            if (status.UP && this.canLookUpDown) this.object.rotateX(this.rotateSpeed);
            if (status.LEFT) this.object.rotateY(this.rotateSpeed);
            if (status.DOWN && this.canLookUpDown) this.object.rotateX(-this.rotateSpeed);
            if (status.RIGHT) this.object.rotateY(-this.rotateSpeed);
            if (status.Q && this.canBarrelroll) this.object.rotateZ(this.rotateSpeed);
            if (status.E && this.canBarrelroll) this.object.rotateZ(-this.rotateSpeed);

            if (status.SPACE && this.canFly) this.object.translateY(this.moveSpeed);
            if (status.SHIFT && this.canFly) this.object.translateY(-this.moveSpeed);
        }
    }

}