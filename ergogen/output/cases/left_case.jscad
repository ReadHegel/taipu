function case_wall_left_extrude_8_5_outline_fn(){
    return new CSG.Path2D([[149.10616,-152.9937424],[201.3069682,-169.6727684]]).appendArc([204.8338665,-168.2874819],{"radius":3,"clockwise":false,"large":false}).appendPoint([215.7545831,-148.9007041]).appendArc([216.1407588,-147.4283174],{"radius":3,"clockwise":false,"large":false}).appendPoint([216.1407588,-82.8288312]).appendArc([213.551721,-79.8571128],{"radius":3,"clockwise":false,"large":false}).appendPoint([154.9615289,-71.7546132]).appendArc([154.5505667,-71.7263316],{"radius":3,"clockwise":false,"large":false}).appendPoint([128.0069414,-71.7263316]).appendArc([127.5105461,-71.7676847],{"radius":3,"clockwise":false,"large":false}).appendPoint([109.8779275,-74.7260462]).appendArc([109.6381711,-74.7764152],{"radius":3,"clockwise":false,"large":false}).appendPoint([67.6236245,-85.4112592]).appendArc([65.388972,-88.7370565],{"radius":3,"clockwise":false,"large":false}).appendPoint([75.3864628,-159.8729004]).appendArc([78.7683726,-162.4270796],{"radius":3,"clockwise":false,"large":false}).appendPoint([147.7819804,-152.879717]).appendArc([149.10616,-152.9937423],{"radius":3,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[148.4215207,-149.9603265],[199.8948119,-166.5367302]]).appendArc([203.4124952,-165.1811527],{"radius":3,"clockwise":false,"large":false}).appendPoint([212.7991304,-148.9230236]).appendArc([213.2010542,-147.4230236],{"radius":3,"clockwise":false,"large":false}).appendPoint([213.2010542,-84.8568112]).appendArc([210.5937419,-81.8826228],{"radius":3,"clockwise":false,"large":false}).appendPoint([152.9525162,-74.2721432]).appendArc([152.5598285,-74.2463316],{"radius":3,"clockwise":false,"large":false}).appendPoint([129.9643591,-74.2463316]).appendArc([129.5516539,-74.2748548],{"radius":3,"clockwise":false,"large":false}).appendPoint([111.9149946,-76.7243908]).appendArc([111.6022644,-76.7848981],{"radius":3,"clockwise":false,"large":false}).appendPoint([70.429358,-87.045495]).appendArc([68.1839892,-90.3739838],{"radius":3,"clockwise":false,"large":false}).appendPoint([77.547577,-156.9993741]).appendArc([80.9539827,-159.5500616],{"radius":3,"clockwise":false,"large":false}).appendPoint([147.0663121,-149.8476972]).appendArc([148.4215207,-149.9603265],{"radius":3,"clockwise":true,"large":false}).close().innerToCAG()
).extrude({ offset: [0, 0, 8.5] });
}


function left_mounting_standoff_extrude_7_outline_fn(){
    return CAG.circle({"center":[187.3975335,-151.9198802],"radius":2.5})
.union(
    CAG.circle({"center":[97.4470206,-151.2926934],"radius":2.5})
).union(
    CAG.circle({"center":[150.257021,-108.1963316],"radius":2.5})
).union(
    CAG.circle({"center":[186.257021,-95.3463316],"radius":2.5})
).union(
    CAG.circle({"center":[90.3491925,-100.7890218],"radius":2.5})
).extrude({ offset: [0, 0, 7] });
}


function left_mounting_extrude_7_outline_fn(){
    return CAG.circle({"center":[187.3975335,-151.9198802],"radius":1.35})
.union(
    CAG.circle({"center":[97.4470206,-151.2926934],"radius":1.35})
).union(
    CAG.circle({"center":[150.257021,-108.1963316],"radius":1.35})
).union(
    CAG.circle({"center":[186.257021,-95.3463316],"radius":1.35})
).union(
    CAG.circle({"center":[90.3491925,-100.7890218],"radius":1.35})
).extrude({ offset: [0, 0, 7] });
}


function xl_board_left_extrude_2_outline_fn(){
    return new CSG.Path2D([[149.10616,-152.9937424],[201.3069682,-169.6727684]]).appendArc([204.8338665,-168.2874819],{"radius":3,"clockwise":false,"large":false}).appendPoint([215.7545831,-148.9007041]).appendArc([216.1407588,-147.4283174],{"radius":3,"clockwise":false,"large":false}).appendPoint([216.1407588,-82.8288312]).appendArc([213.551721,-79.8571128],{"radius":3,"clockwise":false,"large":false}).appendPoint([154.9615289,-71.7546132]).appendArc([154.5505667,-71.7263316],{"radius":3,"clockwise":false,"large":false}).appendPoint([128.0069414,-71.7263316]).appendArc([127.5105461,-71.7676847],{"radius":3,"clockwise":false,"large":false}).appendPoint([109.8779275,-74.7260462]).appendArc([109.6381711,-74.7764152],{"radius":3,"clockwise":false,"large":false}).appendPoint([67.6236245,-85.4112592]).appendArc([65.388972,-88.7370565],{"radius":3,"clockwise":false,"large":false}).appendPoint([75.3864628,-159.8729004]).appendArc([78.7683726,-162.4270796],{"radius":3,"clockwise":false,"large":false}).appendPoint([147.7819804,-152.879717]).appendArc([149.10616,-152.9937423],{"radius":3,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 2] });
}


function xl_board_left_extrude_7_outline_fn(){
    return new CSG.Path2D([[149.10616,-152.9937424],[201.3069682,-169.6727684]]).appendArc([204.8338665,-168.2874819],{"radius":3,"clockwise":false,"large":false}).appendPoint([215.7545831,-148.9007041]).appendArc([216.1407588,-147.4283174],{"radius":3,"clockwise":false,"large":false}).appendPoint([216.1407588,-82.8288312]).appendArc([213.551721,-79.8571128],{"radius":3,"clockwise":false,"large":false}).appendPoint([154.9615289,-71.7546132]).appendArc([154.5505667,-71.7263316],{"radius":3,"clockwise":false,"large":false}).appendPoint([128.0069414,-71.7263316]).appendArc([127.5105461,-71.7676847],{"radius":3,"clockwise":false,"large":false}).appendPoint([109.8779275,-74.7260462]).appendArc([109.6381711,-74.7764152],{"radius":3,"clockwise":false,"large":false}).appendPoint([67.6236245,-85.4112592]).appendArc([65.388972,-88.7370565],{"radius":3,"clockwise":false,"large":false}).appendPoint([75.3864628,-159.8729004]).appendArc([78.7683726,-162.4270796],{"radius":3,"clockwise":false,"large":false}).appendPoint([147.7819804,-152.879717]).appendArc([149.10616,-152.9937423],{"radius":3,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 7] });
}


function xs_board_left_extrude_7_outline_fn(){
    return new CSG.Path2D([[149.4199603,-148.9607468],[199.5267501,-165.1668357]]).appendArc([203.0480329,-163.8124199],{"radius":3,"clockwise":false,"large":false}).appendPoint([211.433105,-149.289049]).appendArc([211.8350288,-147.789049],{"radius":3,"clockwise":false,"large":false}).appendPoint([211.8350288,-86.0900971]).appendArc([209.242025,-83.117833],{"radius":3,"clockwise":false,"large":false}).appendPoint([151.9595742,-75.2740675]).appendArc([151.552578,-75.2463316],{"radius":3,"clockwise":false,"large":false}).appendPoint([130.9643591,-75.2463316]).appendArc([130.5516539,-75.2748548],{"radius":3,"clockwise":false,"large":false}).appendPoint([112.9112586,-77.7249097]).appendArc([112.6058309,-77.7836068],{"radius":3,"clockwise":false,"large":false}).appendPoint([71.567051,-87.9015335]).appendArc([69.3143795,-91.2318325],{"radius":3,"clockwise":false,"large":false}).appendPoint([78.399561,-155.8762578]).appendArc([81.7996781,-158.4278613],{"radius":3,"clockwise":false,"large":false}).appendPoint([148.0674409,-148.8460398]).appendArc([149.4199603,-148.9607468],{"radius":3,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 7] });
}




                function _left_wall_case_fn() {
                    

                // creating part 0 of case _left_wall
                let _left_wall__part_0 = case_wall_left_extrude_8_5_outline_fn();

                // make sure that rotations are relative
                let _left_wall__part_0_bounds = _left_wall__part_0.getBounds();
                let _left_wall__part_0_x = _left_wall__part_0_bounds[0].x + (_left_wall__part_0_bounds[1].x - _left_wall__part_0_bounds[0].x) / 2
                let _left_wall__part_0_y = _left_wall__part_0_bounds[0].y + (_left_wall__part_0_bounds[1].y - _left_wall__part_0_bounds[0].y) / 2
                _left_wall__part_0 = translate([-_left_wall__part_0_x, -_left_wall__part_0_y, 0], _left_wall__part_0);
                _left_wall__part_0 = rotate([0,0,0], _left_wall__part_0);
                _left_wall__part_0 = translate([_left_wall__part_0_x, _left_wall__part_0_y, 0], _left_wall__part_0);

                _left_wall__part_0 = translate([0,0,0], _left_wall__part_0);
                let result = _left_wall__part_0;
                
            
                    return result;
                }
            
            

                function _left_standoff_case_fn() {
                    

                // creating part 0 of case _left_standoff
                let _left_standoff__part_0 = left_mounting_standoff_extrude_7_outline_fn();

                // make sure that rotations are relative
                let _left_standoff__part_0_bounds = _left_standoff__part_0.getBounds();
                let _left_standoff__part_0_x = _left_standoff__part_0_bounds[0].x + (_left_standoff__part_0_bounds[1].x - _left_standoff__part_0_bounds[0].x) / 2
                let _left_standoff__part_0_y = _left_standoff__part_0_bounds[0].y + (_left_standoff__part_0_bounds[1].y - _left_standoff__part_0_bounds[0].y) / 2
                _left_standoff__part_0 = translate([-_left_standoff__part_0_x, -_left_standoff__part_0_y, 0], _left_standoff__part_0);
                _left_standoff__part_0 = rotate([0,0,0], _left_standoff__part_0);
                _left_standoff__part_0 = translate([_left_standoff__part_0_x, _left_standoff__part_0_y, 0], _left_standoff__part_0);

                _left_standoff__part_0 = translate([0,0,0], _left_standoff__part_0);
                let result = _left_standoff__part_0;
                
            
                    return result;
                }
            
            

                function _left_mounting_case_fn() {
                    

                // creating part 0 of case _left_mounting
                let _left_mounting__part_0 = left_mounting_extrude_7_outline_fn();

                // make sure that rotations are relative
                let _left_mounting__part_0_bounds = _left_mounting__part_0.getBounds();
                let _left_mounting__part_0_x = _left_mounting__part_0_bounds[0].x + (_left_mounting__part_0_bounds[1].x - _left_mounting__part_0_bounds[0].x) / 2
                let _left_mounting__part_0_y = _left_mounting__part_0_bounds[0].y + (_left_mounting__part_0_bounds[1].y - _left_mounting__part_0_bounds[0].y) / 2
                _left_mounting__part_0 = translate([-_left_mounting__part_0_x, -_left_mounting__part_0_y, 0], _left_mounting__part_0);
                _left_mounting__part_0 = rotate([0,0,0], _left_mounting__part_0);
                _left_mounting__part_0 = translate([_left_mounting__part_0_x, _left_mounting__part_0_y, 0], _left_mounting__part_0);

                _left_mounting__part_0 = translate([0,0,0], _left_mounting__part_0);
                let result = _left_mounting__part_0;
                
            
                    return result;
                }
            
            

                function _xl_left_bottom_case_fn() {
                    

                // creating part 0 of case _xl_left_bottom
                let _xl_left_bottom__part_0 = xl_board_left_extrude_2_outline_fn();

                // make sure that rotations are relative
                let _xl_left_bottom__part_0_bounds = _xl_left_bottom__part_0.getBounds();
                let _xl_left_bottom__part_0_x = _xl_left_bottom__part_0_bounds[0].x + (_xl_left_bottom__part_0_bounds[1].x - _xl_left_bottom__part_0_bounds[0].x) / 2
                let _xl_left_bottom__part_0_y = _xl_left_bottom__part_0_bounds[0].y + (_xl_left_bottom__part_0_bounds[1].y - _xl_left_bottom__part_0_bounds[0].y) / 2
                _xl_left_bottom__part_0 = translate([-_xl_left_bottom__part_0_x, -_xl_left_bottom__part_0_y, 0], _xl_left_bottom__part_0);
                _xl_left_bottom__part_0 = rotate([0,0,0], _xl_left_bottom__part_0);
                _xl_left_bottom__part_0 = translate([_xl_left_bottom__part_0_x, _xl_left_bottom__part_0_y, 0], _xl_left_bottom__part_0);

                _xl_left_bottom__part_0 = translate([0,0,0], _xl_left_bottom__part_0);
                let result = _xl_left_bottom__part_0;
                
            
                    return result;
                }
            
            

                function _left_next_to_wall_standoff_case_fn() {
                    

                // creating part 0 of case _left_next_to_wall_standoff
                let _left_next_to_wall_standoff__part_0 = _xl_left_bottom_pcb_bot_h_case_fn();

                // make sure that rotations are relative
                let _left_next_to_wall_standoff__part_0_bounds = _left_next_to_wall_standoff__part_0.getBounds();
                let _left_next_to_wall_standoff__part_0_x = _left_next_to_wall_standoff__part_0_bounds[0].x + (_left_next_to_wall_standoff__part_0_bounds[1].x - _left_next_to_wall_standoff__part_0_bounds[0].x) / 2
                let _left_next_to_wall_standoff__part_0_y = _left_next_to_wall_standoff__part_0_bounds[0].y + (_left_next_to_wall_standoff__part_0_bounds[1].y - _left_next_to_wall_standoff__part_0_bounds[0].y) / 2
                _left_next_to_wall_standoff__part_0 = translate([-_left_next_to_wall_standoff__part_0_x, -_left_next_to_wall_standoff__part_0_y, 0], _left_next_to_wall_standoff__part_0);
                _left_next_to_wall_standoff__part_0 = rotate([0,0,0], _left_next_to_wall_standoff__part_0);
                _left_next_to_wall_standoff__part_0 = translate([_left_next_to_wall_standoff__part_0_x, _left_next_to_wall_standoff__part_0_y, 0], _left_next_to_wall_standoff__part_0);

                _left_next_to_wall_standoff__part_0 = translate([0,0,0], _left_next_to_wall_standoff__part_0);
                let result = _left_next_to_wall_standoff__part_0;
                
            

                // creating part 1 of case _left_next_to_wall_standoff
                let _left_next_to_wall_standoff__part_1 = _left_next_to_wall_standoff_full_case_fn();

                // make sure that rotations are relative
                let _left_next_to_wall_standoff__part_1_bounds = _left_next_to_wall_standoff__part_1.getBounds();
                let _left_next_to_wall_standoff__part_1_x = _left_next_to_wall_standoff__part_1_bounds[0].x + (_left_next_to_wall_standoff__part_1_bounds[1].x - _left_next_to_wall_standoff__part_1_bounds[0].x) / 2
                let _left_next_to_wall_standoff__part_1_y = _left_next_to_wall_standoff__part_1_bounds[0].y + (_left_next_to_wall_standoff__part_1_bounds[1].y - _left_next_to_wall_standoff__part_1_bounds[0].y) / 2
                _left_next_to_wall_standoff__part_1 = translate([-_left_next_to_wall_standoff__part_1_x, -_left_next_to_wall_standoff__part_1_y, 0], _left_next_to_wall_standoff__part_1);
                _left_next_to_wall_standoff__part_1 = rotate([0,0,0], _left_next_to_wall_standoff__part_1);
                _left_next_to_wall_standoff__part_1 = translate([_left_next_to_wall_standoff__part_1_x, _left_next_to_wall_standoff__part_1_y, 0], _left_next_to_wall_standoff__part_1);

                _left_next_to_wall_standoff__part_1 = translate([0,0,0], _left_next_to_wall_standoff__part_1);
                result = result.subtract(_left_next_to_wall_standoff__part_1);
                
            
                    return result;
                }
            
            

                function _xl_left_bottom_pcb_bot_h_case_fn() {
                    

                // creating part 0 of case _xl_left_bottom_pcb_bot_h
                let _xl_left_bottom_pcb_bot_h__part_0 = xl_board_left_extrude_7_outline_fn();

                // make sure that rotations are relative
                let _xl_left_bottom_pcb_bot_h__part_0_bounds = _xl_left_bottom_pcb_bot_h__part_0.getBounds();
                let _xl_left_bottom_pcb_bot_h__part_0_x = _xl_left_bottom_pcb_bot_h__part_0_bounds[0].x + (_xl_left_bottom_pcb_bot_h__part_0_bounds[1].x - _xl_left_bottom_pcb_bot_h__part_0_bounds[0].x) / 2
                let _xl_left_bottom_pcb_bot_h__part_0_y = _xl_left_bottom_pcb_bot_h__part_0_bounds[0].y + (_xl_left_bottom_pcb_bot_h__part_0_bounds[1].y - _xl_left_bottom_pcb_bot_h__part_0_bounds[0].y) / 2
                _xl_left_bottom_pcb_bot_h__part_0 = translate([-_xl_left_bottom_pcb_bot_h__part_0_x, -_xl_left_bottom_pcb_bot_h__part_0_y, 0], _xl_left_bottom_pcb_bot_h__part_0);
                _xl_left_bottom_pcb_bot_h__part_0 = rotate([0,0,0], _xl_left_bottom_pcb_bot_h__part_0);
                _xl_left_bottom_pcb_bot_h__part_0 = translate([_xl_left_bottom_pcb_bot_h__part_0_x, _xl_left_bottom_pcb_bot_h__part_0_y, 0], _xl_left_bottom_pcb_bot_h__part_0);

                _xl_left_bottom_pcb_bot_h__part_0 = translate([0,0,0], _xl_left_bottom_pcb_bot_h__part_0);
                let result = _xl_left_bottom_pcb_bot_h__part_0;
                
            
                    return result;
                }
            
            

                function _left_next_to_wall_standoff_full_case_fn() {
                    

                // creating part 0 of case _left_next_to_wall_standoff_full
                let _left_next_to_wall_standoff_full__part_0 = xs_board_left_extrude_7_outline_fn();

                // make sure that rotations are relative
                let _left_next_to_wall_standoff_full__part_0_bounds = _left_next_to_wall_standoff_full__part_0.getBounds();
                let _left_next_to_wall_standoff_full__part_0_x = _left_next_to_wall_standoff_full__part_0_bounds[0].x + (_left_next_to_wall_standoff_full__part_0_bounds[1].x - _left_next_to_wall_standoff_full__part_0_bounds[0].x) / 2
                let _left_next_to_wall_standoff_full__part_0_y = _left_next_to_wall_standoff_full__part_0_bounds[0].y + (_left_next_to_wall_standoff_full__part_0_bounds[1].y - _left_next_to_wall_standoff_full__part_0_bounds[0].y) / 2
                _left_next_to_wall_standoff_full__part_0 = translate([-_left_next_to_wall_standoff_full__part_0_x, -_left_next_to_wall_standoff_full__part_0_y, 0], _left_next_to_wall_standoff_full__part_0);
                _left_next_to_wall_standoff_full__part_0 = rotate([0,0,0], _left_next_to_wall_standoff_full__part_0);
                _left_next_to_wall_standoff_full__part_0 = translate([_left_next_to_wall_standoff_full__part_0_x, _left_next_to_wall_standoff_full__part_0_y, 0], _left_next_to_wall_standoff_full__part_0);

                _left_next_to_wall_standoff_full__part_0 = translate([0,0,0], _left_next_to_wall_standoff_full__part_0);
                let result = _left_next_to_wall_standoff_full__part_0;
                
            
                    return result;
                }
            
            

                function left_case_case_fn() {
                    

                // creating part 0 of case left_case
                let left_case__part_0 = _left_wall_case_fn();

                // make sure that rotations are relative
                let left_case__part_0_bounds = left_case__part_0.getBounds();
                let left_case__part_0_x = left_case__part_0_bounds[0].x + (left_case__part_0_bounds[1].x - left_case__part_0_bounds[0].x) / 2
                let left_case__part_0_y = left_case__part_0_bounds[0].y + (left_case__part_0_bounds[1].y - left_case__part_0_bounds[0].y) / 2
                left_case__part_0 = translate([-left_case__part_0_x, -left_case__part_0_y, 0], left_case__part_0);
                left_case__part_0 = rotate([0,0,0], left_case__part_0);
                left_case__part_0 = translate([left_case__part_0_x, left_case__part_0_y, 0], left_case__part_0);

                left_case__part_0 = translate([0,0,0], left_case__part_0);
                let result = left_case__part_0;
                
            

                // creating part 1 of case left_case
                let left_case__part_1 = _left_standoff_case_fn();

                // make sure that rotations are relative
                let left_case__part_1_bounds = left_case__part_1.getBounds();
                let left_case__part_1_x = left_case__part_1_bounds[0].x + (left_case__part_1_bounds[1].x - left_case__part_1_bounds[0].x) / 2
                let left_case__part_1_y = left_case__part_1_bounds[0].y + (left_case__part_1_bounds[1].y - left_case__part_1_bounds[0].y) / 2
                left_case__part_1 = translate([-left_case__part_1_x, -left_case__part_1_y, 0], left_case__part_1);
                left_case__part_1 = rotate([0,0,0], left_case__part_1);
                left_case__part_1 = translate([left_case__part_1_x, left_case__part_1_y, 0], left_case__part_1);

                left_case__part_1 = translate([0,0,0], left_case__part_1);
                result = result.union(left_case__part_1);
                
            

                // creating part 2 of case left_case
                let left_case__part_2 = _left_mounting_case_fn();

                // make sure that rotations are relative
                let left_case__part_2_bounds = left_case__part_2.getBounds();
                let left_case__part_2_x = left_case__part_2_bounds[0].x + (left_case__part_2_bounds[1].x - left_case__part_2_bounds[0].x) / 2
                let left_case__part_2_y = left_case__part_2_bounds[0].y + (left_case__part_2_bounds[1].y - left_case__part_2_bounds[0].y) / 2
                left_case__part_2 = translate([-left_case__part_2_x, -left_case__part_2_y, 0], left_case__part_2);
                left_case__part_2 = rotate([0,0,0], left_case__part_2);
                left_case__part_2 = translate([left_case__part_2_x, left_case__part_2_y, 0], left_case__part_2);

                left_case__part_2 = translate([0,0,0], left_case__part_2);
                result = result.subtract(left_case__part_2);
                
            

                // creating part 3 of case left_case
                let left_case__part_3 = _xl_left_bottom_case_fn();

                // make sure that rotations are relative
                let left_case__part_3_bounds = left_case__part_3.getBounds();
                let left_case__part_3_x = left_case__part_3_bounds[0].x + (left_case__part_3_bounds[1].x - left_case__part_3_bounds[0].x) / 2
                let left_case__part_3_y = left_case__part_3_bounds[0].y + (left_case__part_3_bounds[1].y - left_case__part_3_bounds[0].y) / 2
                left_case__part_3 = translate([-left_case__part_3_x, -left_case__part_3_y, 0], left_case__part_3);
                left_case__part_3 = rotate([0,0,0], left_case__part_3);
                left_case__part_3 = translate([left_case__part_3_x, left_case__part_3_y, 0], left_case__part_3);

                left_case__part_3 = translate([0,0,0], left_case__part_3);
                result = result.union(left_case__part_3);
                
            

                // creating part 4 of case left_case
                let left_case__part_4 = _left_next_to_wall_standoff_case_fn();

                // make sure that rotations are relative
                let left_case__part_4_bounds = left_case__part_4.getBounds();
                let left_case__part_4_x = left_case__part_4_bounds[0].x + (left_case__part_4_bounds[1].x - left_case__part_4_bounds[0].x) / 2
                let left_case__part_4_y = left_case__part_4_bounds[0].y + (left_case__part_4_bounds[1].y - left_case__part_4_bounds[0].y) / 2
                left_case__part_4 = translate([-left_case__part_4_x, -left_case__part_4_y, 0], left_case__part_4);
                left_case__part_4 = rotate([0,0,0], left_case__part_4);
                left_case__part_4 = translate([left_case__part_4_x, left_case__part_4_y, 0], left_case__part_4);

                left_case__part_4 = translate([0,0,0], left_case__part_4);
                result = result.union(left_case__part_4);
                
            
                    return result;
                }
            
            
        
            function main() {
                return left_case_case_fn();
            }

        