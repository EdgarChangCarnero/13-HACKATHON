import { exportArrayObjetoDog } from './modulosImportaExportar.js';
const ArrayObjetoDog = exportArrayObjetoDog();
const listaPerrito = document.querySelector('#agregar-dog');
async function getInfo() {
    // const users = await fetch (ArrayObjetoDog());
    // const user = await users.json();    
    try {
        let template1 = '',
            template2 = '',
            template3 = '',
            template4 = '',
            template5 = '',
            template6 = '',
            template7 = '',
            template8 = '',
            template9 = '',
            cont = 0;
        ArrayObjetoDog.forEach((post) => {

            switch (cont) {
                case 0:
                    cont++;
                    template1 += `                
                    <div>
                        <br><img src="https://img2.pngio.com/golden-retriever-cachorro-perro-raza-mascota-compaero-perro-perro-png-728_518.png" style="width:200px; border-radius: 50%"/>
                        <br>${post.nombre}                  
                        <br>${post.telefono} | ${post.correo}
                        <br>${post.pais}
                        <br>${post.descripcion}
                    </div>              
                     `;
                    break;
                case 1:
                    cont++;
                    template2 += `                
                        <div>
                            <br><img src="https://img2.pngio.com/golden-retriever-cachorro-perro-raza-mascota-compaero-perro-perro-png-728_518.png" style="width:200px; border-radius: 50%"/>
                            <br>${post.nombre}                  
                            <br>${post.telefono} | ${post.correo}
                            <br>${post.pais}
                            <br>${post.descripcion}
                        </div>              
                         `;
                    break;
                case 2:
                    cont++;
                    template3 += `                
                        <div>
                            <br><img src="https://img2.pngio.com/golden-retriever-cachorro-perro-raza-mascota-compaero-perro-perro-png-728_518.png" style="width:200px; border-radius: 50%"/>
                            <br>${post.nombre}                  
                            <br>${post.telefono} | ${post.correo}
                            <br>${post.pais}
                            <br>${post.descripcion}
                        </div>              
                         `;
                    break;
                case 3:
                    cont++;
                    template4 += `                
                        <div>
                            <br><img src="https://img2.pngio.com/golden-retriever-cachorro-perro-raza-mascota-compaero-perro-perro-png-728_518.png" style="width:200px; border-radius: 50%"/>
                            <br>${post.nombre}                  
                            <br>${post.telefono} | ${post.correo}
                            <br>${post.pais}
                            <br>${post.descripcion}
                        </div>              
                         `;
                    break;
                case 4:
                    cont++;
                    template5 += `                
                        <div>
                            <br><img src="https://img2.pngio.com/golden-retriever-cachorro-perro-raza-mascota-compaero-perro-perro-png-728_518.png" style="width:200px; border-radius: 50%"/>
                            <br>${post.nombre}                  
                            <br>${post.telefono} | ${post.correo}
                            <br>${post.pais}
                            <br>${post.descripcion}
                        </div>              
                         `;
                    break;
                case 5:
                    cont++;
                    template6 += `                
                        <div>
                            <br><img src="https://img2.pngio.com/golden-retriever-cachorro-perro-raza-mascota-compaero-perro-perro-png-728_518.png" style="width:200px; border-radius: 50%"/>
                            <br>${post.nombre}                  
                            <br>${post.telefono} | ${post.correo}
                            <br>${post.pais}
                            <br>${post.descripcion}
                        </div>              
                         `;
                    break;
                case 6:
                    cont++;
                    template7 += `                
                        <div>
                            <br><img src="https://img2.pngio.com/golden-retriever-cachorro-perro-raza-mascota-compaero-perro-perro-png-728_518.png" style="width:200px; border-radius: 50%"/>
                            <br>${post.nombre}                  
                            <br>${post.telefono} | ${post.correo}
                            <br>${post.pais}
                            <br>${post.descripcion}
                        </div>              
                         `;
                    break;
                case 7:
                    cont++;
                    template8 += `                
                        <div>
                            <br><img src="https://img2.pngio.com/golden-retriever-cachorro-perro-raza-mascota-compaero-perro-perro-png-728_518.png" style="width:200px; border-radius: 50%"/>
                            <br>${post.nombre}                  
                            <br>${post.telefono} | ${post.correo}
                            <br>${post.pais}
                            <br>${post.descripcion}
                        </div>              
                         `;
                    break;
                case 8:
                    cont++;
                    template9 += `                
                        <div>
                            <br><img src="https://img2.pngio.com/golden-retriever-cachorro-perro-raza-mascota-compaero-perro-perro-png-728_518.png" style="width:200px; border-radius: 50%"/>
                            <br>${post.nombre}                  
                            <br>${post.telefono} | ${post.correo}
                            <br>${post.pais}
                            <br>${post.descripcion}
                        </div>              
                         `;
                    break;
            }



            console.log(cont);

        });

        listado1.innerHTML = template1;
        listado2.innerHTML = template2;
        listado3.innerHTML = template3;
        listado4.innerHTML = template4;
        listado5.innerHTML = template5;
        listado6.innerHTML = template6;
        listado7.innerHTML = template7;
        listado8.innerHTML = template8;
        listado9.innerHTML = template2;

    } catch {
        console.log('error');
    }
}
getInfo();
cargarListeners();
function cargarListeners() {
	// Agregar Nuevo perrito cuando presionamos agregar
	listaPerrito.addEventListener('click', agregarDog);
}

//Funciones
function agregarDog(e) {
	e.preventDefault();
	//Delegation Perritos
    console.log('ddddd' + e);
    console.log(e.target.classList.contains('agregar-dog'));
	if (e.target.classList.contains('agregar-dog')) {
		let perrito = e.target.parentElement.parentElement;
		leerDatosCurso(perrito);
	}
};