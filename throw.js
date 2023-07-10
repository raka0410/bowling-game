AFRAME.registerComponent("bowling-ball",{

    init:function(){
        this.shootBullet();
    },
    shootBullet:function(){
        window.addEventListener("keydown", (e) =>{
            if (e.key==="z"){
                var bullet=document.createElement("a-entity");
                bullet.setAttribute("geometry",{
                    primitve:"sphere",
                    radius:0.1,
                });
                bullet.setAttribute("material","color","black");
                var cam= document.querySelector("#camera");
                pos=cam.getAttribute("position",{
                    x:pos.x,
                    y:pos.y,
                    z:pos.z,
                });
                cam.appendChild(bullet)
                var camera = document.querySelector("#camera").object3D;
                var direction = new THREE.Vector();
                camera.getWorldDirection(direction);
                bullet.setAttribute("velocity", direction.multiplyScalar(-10));

                var scene = document.querySelector("#scene");

                scene.appendChild(bullet)
            }
        })
    }

})