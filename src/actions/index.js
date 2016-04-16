import { CHANGE_SLIDE } from "./types";

export function change_slide(slide){
    
    return ({
    
        type: CHANGE_SLIDE,
        payload: slide
        
    });
    
}