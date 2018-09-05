#version 150 core

uniform vec3 lightPosition;
uniform vec3 eyePosition;

uniform float shininess;

uniform float ka;
uniform float kd;
uniform float ks;

in vec3 worldPosition;
in vec3 worldNormal;

void main(){
    vec3 _worldNormal = worldNormal;
    if (!gl_FrontFacing) {
        _worldNormal = -worldNormal;
    }

    vec3 L = normalize( lightPosition - worldPosition);//light direction
    vec3 V = normalize( eyePosition - worldPosition);//view direction

    float LdotN = max(0.f, dot(L , _worldNormal));

    float diffuse = kd * LdotN;

    float specular = 0;

    if (LdotN > 0.0) {

        //choose H or R to see the difference
        vec3 R = -normalize(reflect(L, _worldNormal));//Reflection
        specular = ks * pow(max(0.f, dot(R, V)), shininess);

        //Blinn-Phong
        // vec3 H = normalize(L + V );//Halfway
        //specular = material_ks * pow(max(0, dot(H, world_normal)), material_shininess);

    }

    float light = diffuse + specular;

    gl_FragColor = vec4(light, light, light, 1);
}
