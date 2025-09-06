function case_wall_right_extrude_8_5_outline_fn(){
    return new CSG.Path2D([[298.3685493,-151.8716449],[243.2116018,-169.6641772]]).appendArc([239.6767706,-168.2814376],{"radius":3,"clockwise":true,"large":false}).appendPoint([228.7594589,-148.9007041]).appendArc([228.3732832,-147.4283174],{"radius":3,"clockwise":true,"large":false}).appendPoint([228.3732832,-82.8288312]).appendArc([230.962321,-79.8571128],{"radius":3,"clockwise":true,"large":false}).appendPoint([289.5525131,-71.7546132]).appendArc([289.9634753,-71.7263316],{"radius":3,"clockwise":true,"large":false}).appendPoint([316.5071006,-71.7263316]).appendArc([317.0034959,-71.7676847],{"radius":3,"clockwise":true,"large":false}).appendPoint([334.6810833,-74.7335909]).appendArc([334.8322053,-74.7629511],{"radius":3,"clockwise":true,"large":false}).appendPoint([394.6150081,-87.9779057]).appendArc([396.938295,-91.3247119],{"radius":3,"clockwise":true,"large":false}).appendPoint([389.3220709,-145.516963]).appendArc([386.4759716,-148.0968507],{"radius":3,"clockwise":true,"large":false}).appendPoint([299.1648513,-151.7293642]).appendArc([298.3685493,-151.8716449],{"radius":3,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[296.4747119,-149.9693984],[244.5824294,-166.6737088]]).appendArc([241.0650962,-165.3180185],{"radius":3,"clockwise":true,"large":false}).appendPoint([231.578309,-148.886421]).appendArc([231.1763852,-147.386421],{"radius":3,"clockwise":true,"large":false}).appendPoint([231.1763852,-84.243667]).appendArc([233.8099115,-81.266135],{"radius":3,"clockwise":true,"large":false}).appendPoint([291.4744726,-74.1687996]).appendArc([291.8409463,-74.1463316],{"radius":3,"clockwise":true,"large":false}).appendPoint([314.6496829,-74.1463316]).appendArc([315.0623881,-74.1748548],{"radius":3,"clockwise":true,"large":false}).appendPoint([332.7430373,-76.6305005]).appendArc([332.9694563,-76.6708478],{"radius":3,"clockwise":true,"large":false}).appendPoint([391.924821,-89.525895]).appendArc([394.2565011,-92.8745439],{"radius":3,"clockwise":true,"large":false}).appendPoint([387.1689463,-143.3051167]).appendArc([384.3338723,-145.8845254],{"radius":3,"clockwise":true,"large":false}).appendPoint([297.2582386,-149.8281606]).appendArc([296.4747119,-149.9693984],{"radius":3,"clockwise":false,"large":false}).close().innerToCAG()
).extrude({ offset: [0, 0, 8.5] });
}


function right_mounting_standoff_extrude_7_outline_fn(){
    return CAG.circle({"center":[257.1165085,-151.9198802],"radius":4})
.union(
    CAG.circle({"center":[367.2577893,-136.963252],"radius":4})
).union(
    CAG.circle({"center":[294.257021,-108.1963316],"radius":4})
).union(
    CAG.circle({"center":[258.257021,-95.3463316],"radius":4})
).union(
    CAG.circle({"center":[371.9896747,-103.2941376],"radius":4})
).extrude({ offset: [0, 0, 7] });
}


function right_mounting_extrude_7_outline_fn(){
    return CAG.circle({"center":[257.1165085,-151.9198802],"radius":1.5})
.union(
    CAG.circle({"center":[367.2577893,-136.963252],"radius":1.5})
).union(
    CAG.circle({"center":[294.257021,-108.1963316],"radius":1.5})
).union(
    CAG.circle({"center":[258.257021,-95.3463316],"radius":1.5})
).union(
    CAG.circle({"center":[371.9896747,-103.2941376],"radius":1.5})
).extrude({ offset: [0, 0, 7] });
}


function xl_board_right_extrude_2_outline_fn(){
    return new CSG.Path2D([[298.3685493,-151.8716449],[243.2116018,-169.6641772]]).appendArc([239.6767706,-168.2814376],{"radius":3,"clockwise":true,"large":false}).appendPoint([228.7594589,-148.9007041]).appendArc([228.3732832,-147.4283174],{"radius":3,"clockwise":true,"large":false}).appendPoint([228.3732832,-82.8288312]).appendArc([230.962321,-79.8571128],{"radius":3,"clockwise":true,"large":false}).appendPoint([289.5525131,-71.7546132]).appendArc([289.9634753,-71.7263316],{"radius":3,"clockwise":true,"large":false}).appendPoint([316.5071006,-71.7263316]).appendArc([317.0034959,-71.7676847],{"radius":3,"clockwise":true,"large":false}).appendPoint([334.6810833,-74.7335909]).appendArc([334.8322053,-74.7629511],{"radius":3,"clockwise":true,"large":false}).appendPoint([394.6150081,-87.9779057]).appendArc([396.938295,-91.3247119],{"radius":3,"clockwise":true,"large":false}).appendPoint([389.3220709,-145.516963]).appendArc([386.4759716,-148.0968507],{"radius":3,"clockwise":true,"large":false}).appendPoint([299.1648513,-151.7293642]).appendArc([298.3685493,-151.8716449],{"radius":3,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 2] });
}


function xl_board_right_extrude_7_outline_fn(){
    return new CSG.Path2D([[298.3685493,-151.8716449],[243.2116018,-169.6641772]]).appendArc([239.6767706,-168.2814376],{"radius":3,"clockwise":true,"large":false}).appendPoint([228.7594589,-148.9007041]).appendArc([228.3732832,-147.4283174],{"radius":3,"clockwise":true,"large":false}).appendPoint([228.3732832,-82.8288312]).appendArc([230.962321,-79.8571128],{"radius":3,"clockwise":true,"large":false}).appendPoint([289.5525131,-71.7546132]).appendArc([289.9634753,-71.7263316],{"radius":3,"clockwise":true,"large":false}).appendPoint([316.5071006,-71.7263316]).appendArc([317.0034959,-71.7676847],{"radius":3,"clockwise":true,"large":false}).appendPoint([334.6810833,-74.7335909]).appendArc([334.8322053,-74.7629511],{"radius":3,"clockwise":true,"large":false}).appendPoint([394.6150081,-87.9779057]).appendArc([396.938295,-91.3247119],{"radius":3,"clockwise":true,"large":false}).appendPoint([389.3220709,-145.516963]).appendArc([386.4759716,-148.0968507],{"radius":3,"clockwise":true,"large":false}).appendPoint([299.1648513,-151.7293642]).appendArc([298.3685493,-151.8716449],{"radius":3,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 7] });
}


function xs_board_right_extrude_7_outline_fn(){
    return new CSG.Path2D([[295.3750435,-148.8698751],[244.9872919,-165.1668357]]).appendArc([241.4660091,-163.8124199],{"radius":3,"clockwise":true,"large":false}).appendPoint([233.080937,-149.289049]).appendArc([232.6790132,-147.789049],{"radius":3,"clockwise":true,"large":false}).appendPoint([232.6790132,-86.2049237]).appendArc([235.2661919,-83.233463],{"radius":3,"clockwise":true,"large":false}).appendPoint([292.5515972,-75.2748709]).appendArc([292.9644185,-75.2463316],{"radius":3,"clockwise":true,"large":false}).appendPoint([313.5496829,-75.2463316]).appendArc([313.9623881,-75.2748548],{"radius":3,"clockwise":true,"large":false}).appendPoint([331.6460979,-77.7309256]).appendArc([331.8664875,-77.7699647],{"radius":3,"clockwise":true,"large":false}).appendPoint([390.6756068,-90.4664804]).appendArc([393.0133162,-93.8164374],{"radius":3,"clockwise":true,"large":false}).appendPoint([386.2322151,-142.066479]).appendArc([383.4016192,-144.6456816],{"radius":3,"clockwise":true,"large":false}).appendPoint([296.1580418,-148.727569]).appendArc([295.3750436,-148.869875],{"radius":3,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 7] });
}




                function _right_wall_case_fn() {
                    

                // creating part 0 of case _right_wall
                let _right_wall__part_0 = case_wall_right_extrude_8_5_outline_fn();

                // make sure that rotations are relative
                let _right_wall__part_0_bounds = _right_wall__part_0.getBounds();
                let _right_wall__part_0_x = _right_wall__part_0_bounds[0].x + (_right_wall__part_0_bounds[1].x - _right_wall__part_0_bounds[0].x) / 2
                let _right_wall__part_0_y = _right_wall__part_0_bounds[0].y + (_right_wall__part_0_bounds[1].y - _right_wall__part_0_bounds[0].y) / 2
                _right_wall__part_0 = translate([-_right_wall__part_0_x, -_right_wall__part_0_y, 0], _right_wall__part_0);
                _right_wall__part_0 = rotate([0,0,0], _right_wall__part_0);
                _right_wall__part_0 = translate([_right_wall__part_0_x, _right_wall__part_0_y, 0], _right_wall__part_0);

                _right_wall__part_0 = translate([0,0,0], _right_wall__part_0);
                let result = _right_wall__part_0;
                
            
                    return result;
                }
            
            

                function _right_standoff_case_fn() {
                    

                // creating part 0 of case _right_standoff
                let _right_standoff__part_0 = right_mounting_standoff_extrude_7_outline_fn();

                // make sure that rotations are relative
                let _right_standoff__part_0_bounds = _right_standoff__part_0.getBounds();
                let _right_standoff__part_0_x = _right_standoff__part_0_bounds[0].x + (_right_standoff__part_0_bounds[1].x - _right_standoff__part_0_bounds[0].x) / 2
                let _right_standoff__part_0_y = _right_standoff__part_0_bounds[0].y + (_right_standoff__part_0_bounds[1].y - _right_standoff__part_0_bounds[0].y) / 2
                _right_standoff__part_0 = translate([-_right_standoff__part_0_x, -_right_standoff__part_0_y, 0], _right_standoff__part_0);
                _right_standoff__part_0 = rotate([0,0,0], _right_standoff__part_0);
                _right_standoff__part_0 = translate([_right_standoff__part_0_x, _right_standoff__part_0_y, 0], _right_standoff__part_0);

                _right_standoff__part_0 = translate([0,0,0], _right_standoff__part_0);
                let result = _right_standoff__part_0;
                
            
                    return result;
                }
            
            

                function _right_mounting_case_fn() {
                    

                // creating part 0 of case _right_mounting
                let _right_mounting__part_0 = right_mounting_extrude_7_outline_fn();

                // make sure that rotations are relative
                let _right_mounting__part_0_bounds = _right_mounting__part_0.getBounds();
                let _right_mounting__part_0_x = _right_mounting__part_0_bounds[0].x + (_right_mounting__part_0_bounds[1].x - _right_mounting__part_0_bounds[0].x) / 2
                let _right_mounting__part_0_y = _right_mounting__part_0_bounds[0].y + (_right_mounting__part_0_bounds[1].y - _right_mounting__part_0_bounds[0].y) / 2
                _right_mounting__part_0 = translate([-_right_mounting__part_0_x, -_right_mounting__part_0_y, 0], _right_mounting__part_0);
                _right_mounting__part_0 = rotate([0,0,0], _right_mounting__part_0);
                _right_mounting__part_0 = translate([_right_mounting__part_0_x, _right_mounting__part_0_y, 0], _right_mounting__part_0);

                _right_mounting__part_0 = translate([0,0,0], _right_mounting__part_0);
                let result = _right_mounting__part_0;
                
            
                    return result;
                }
            
            

                function _xl_right_bottom_case_fn() {
                    

                // creating part 0 of case _xl_right_bottom
                let _xl_right_bottom__part_0 = xl_board_right_extrude_2_outline_fn();

                // make sure that rotations are relative
                let _xl_right_bottom__part_0_bounds = _xl_right_bottom__part_0.getBounds();
                let _xl_right_bottom__part_0_x = _xl_right_bottom__part_0_bounds[0].x + (_xl_right_bottom__part_0_bounds[1].x - _xl_right_bottom__part_0_bounds[0].x) / 2
                let _xl_right_bottom__part_0_y = _xl_right_bottom__part_0_bounds[0].y + (_xl_right_bottom__part_0_bounds[1].y - _xl_right_bottom__part_0_bounds[0].y) / 2
                _xl_right_bottom__part_0 = translate([-_xl_right_bottom__part_0_x, -_xl_right_bottom__part_0_y, 0], _xl_right_bottom__part_0);
                _xl_right_bottom__part_0 = rotate([0,0,0], _xl_right_bottom__part_0);
                _xl_right_bottom__part_0 = translate([_xl_right_bottom__part_0_x, _xl_right_bottom__part_0_y, 0], _xl_right_bottom__part_0);

                _xl_right_bottom__part_0 = translate([0,0,0], _xl_right_bottom__part_0);
                let result = _xl_right_bottom__part_0;
                
            
                    return result;
                }
            
            

                function _right_next_to_wall_standoff_case_fn() {
                    

                // creating part 0 of case _right_next_to_wall_standoff
                let _right_next_to_wall_standoff__part_0 = _xl_right_bottom_pcb_bot_h_case_fn();

                // make sure that rotations are relative
                let _right_next_to_wall_standoff__part_0_bounds = _right_next_to_wall_standoff__part_0.getBounds();
                let _right_next_to_wall_standoff__part_0_x = _right_next_to_wall_standoff__part_0_bounds[0].x + (_right_next_to_wall_standoff__part_0_bounds[1].x - _right_next_to_wall_standoff__part_0_bounds[0].x) / 2
                let _right_next_to_wall_standoff__part_0_y = _right_next_to_wall_standoff__part_0_bounds[0].y + (_right_next_to_wall_standoff__part_0_bounds[1].y - _right_next_to_wall_standoff__part_0_bounds[0].y) / 2
                _right_next_to_wall_standoff__part_0 = translate([-_right_next_to_wall_standoff__part_0_x, -_right_next_to_wall_standoff__part_0_y, 0], _right_next_to_wall_standoff__part_0);
                _right_next_to_wall_standoff__part_0 = rotate([0,0,0], _right_next_to_wall_standoff__part_0);
                _right_next_to_wall_standoff__part_0 = translate([_right_next_to_wall_standoff__part_0_x, _right_next_to_wall_standoff__part_0_y, 0], _right_next_to_wall_standoff__part_0);

                _right_next_to_wall_standoff__part_0 = translate([0,0,0], _right_next_to_wall_standoff__part_0);
                let result = _right_next_to_wall_standoff__part_0;
                
            

                // creating part 1 of case _right_next_to_wall_standoff
                let _right_next_to_wall_standoff__part_1 = _right_next_to_wall_standoff_full_case_fn();

                // make sure that rotations are relative
                let _right_next_to_wall_standoff__part_1_bounds = _right_next_to_wall_standoff__part_1.getBounds();
                let _right_next_to_wall_standoff__part_1_x = _right_next_to_wall_standoff__part_1_bounds[0].x + (_right_next_to_wall_standoff__part_1_bounds[1].x - _right_next_to_wall_standoff__part_1_bounds[0].x) / 2
                let _right_next_to_wall_standoff__part_1_y = _right_next_to_wall_standoff__part_1_bounds[0].y + (_right_next_to_wall_standoff__part_1_bounds[1].y - _right_next_to_wall_standoff__part_1_bounds[0].y) / 2
                _right_next_to_wall_standoff__part_1 = translate([-_right_next_to_wall_standoff__part_1_x, -_right_next_to_wall_standoff__part_1_y, 0], _right_next_to_wall_standoff__part_1);
                _right_next_to_wall_standoff__part_1 = rotate([0,0,0], _right_next_to_wall_standoff__part_1);
                _right_next_to_wall_standoff__part_1 = translate([_right_next_to_wall_standoff__part_1_x, _right_next_to_wall_standoff__part_1_y, 0], _right_next_to_wall_standoff__part_1);

                _right_next_to_wall_standoff__part_1 = translate([0,0,0], _right_next_to_wall_standoff__part_1);
                result = result.subtract(_right_next_to_wall_standoff__part_1);
                
            
                    return result;
                }
            
            

                function _xl_right_bottom_pcb_bot_h_case_fn() {
                    

                // creating part 0 of case _xl_right_bottom_pcb_bot_h
                let _xl_right_bottom_pcb_bot_h__part_0 = xl_board_right_extrude_7_outline_fn();

                // make sure that rotations are relative
                let _xl_right_bottom_pcb_bot_h__part_0_bounds = _xl_right_bottom_pcb_bot_h__part_0.getBounds();
                let _xl_right_bottom_pcb_bot_h__part_0_x = _xl_right_bottom_pcb_bot_h__part_0_bounds[0].x + (_xl_right_bottom_pcb_bot_h__part_0_bounds[1].x - _xl_right_bottom_pcb_bot_h__part_0_bounds[0].x) / 2
                let _xl_right_bottom_pcb_bot_h__part_0_y = _xl_right_bottom_pcb_bot_h__part_0_bounds[0].y + (_xl_right_bottom_pcb_bot_h__part_0_bounds[1].y - _xl_right_bottom_pcb_bot_h__part_0_bounds[0].y) / 2
                _xl_right_bottom_pcb_bot_h__part_0 = translate([-_xl_right_bottom_pcb_bot_h__part_0_x, -_xl_right_bottom_pcb_bot_h__part_0_y, 0], _xl_right_bottom_pcb_bot_h__part_0);
                _xl_right_bottom_pcb_bot_h__part_0 = rotate([0,0,0], _xl_right_bottom_pcb_bot_h__part_0);
                _xl_right_bottom_pcb_bot_h__part_0 = translate([_xl_right_bottom_pcb_bot_h__part_0_x, _xl_right_bottom_pcb_bot_h__part_0_y, 0], _xl_right_bottom_pcb_bot_h__part_0);

                _xl_right_bottom_pcb_bot_h__part_0 = translate([0,0,0], _xl_right_bottom_pcb_bot_h__part_0);
                let result = _xl_right_bottom_pcb_bot_h__part_0;
                
            
                    return result;
                }
            
            

                function _right_next_to_wall_standoff_full_case_fn() {
                    

                // creating part 0 of case _right_next_to_wall_standoff_full
                let _right_next_to_wall_standoff_full__part_0 = xs_board_right_extrude_7_outline_fn();

                // make sure that rotations are relative
                let _right_next_to_wall_standoff_full__part_0_bounds = _right_next_to_wall_standoff_full__part_0.getBounds();
                let _right_next_to_wall_standoff_full__part_0_x = _right_next_to_wall_standoff_full__part_0_bounds[0].x + (_right_next_to_wall_standoff_full__part_0_bounds[1].x - _right_next_to_wall_standoff_full__part_0_bounds[0].x) / 2
                let _right_next_to_wall_standoff_full__part_0_y = _right_next_to_wall_standoff_full__part_0_bounds[0].y + (_right_next_to_wall_standoff_full__part_0_bounds[1].y - _right_next_to_wall_standoff_full__part_0_bounds[0].y) / 2
                _right_next_to_wall_standoff_full__part_0 = translate([-_right_next_to_wall_standoff_full__part_0_x, -_right_next_to_wall_standoff_full__part_0_y, 0], _right_next_to_wall_standoff_full__part_0);
                _right_next_to_wall_standoff_full__part_0 = rotate([0,0,0], _right_next_to_wall_standoff_full__part_0);
                _right_next_to_wall_standoff_full__part_0 = translate([_right_next_to_wall_standoff_full__part_0_x, _right_next_to_wall_standoff_full__part_0_y, 0], _right_next_to_wall_standoff_full__part_0);

                _right_next_to_wall_standoff_full__part_0 = translate([0,0,0], _right_next_to_wall_standoff_full__part_0);
                let result = _right_next_to_wall_standoff_full__part_0;
                
            
                    return result;
                }
            
            

                function right_case_case_fn() {
                    

                // creating part 0 of case right_case
                let right_case__part_0 = _right_wall_case_fn();

                // make sure that rotations are relative
                let right_case__part_0_bounds = right_case__part_0.getBounds();
                let right_case__part_0_x = right_case__part_0_bounds[0].x + (right_case__part_0_bounds[1].x - right_case__part_0_bounds[0].x) / 2
                let right_case__part_0_y = right_case__part_0_bounds[0].y + (right_case__part_0_bounds[1].y - right_case__part_0_bounds[0].y) / 2
                right_case__part_0 = translate([-right_case__part_0_x, -right_case__part_0_y, 0], right_case__part_0);
                right_case__part_0 = rotate([0,0,0], right_case__part_0);
                right_case__part_0 = translate([right_case__part_0_x, right_case__part_0_y, 0], right_case__part_0);

                right_case__part_0 = translate([0,0,0], right_case__part_0);
                let result = right_case__part_0;
                
            

                // creating part 1 of case right_case
                let right_case__part_1 = _right_standoff_case_fn();

                // make sure that rotations are relative
                let right_case__part_1_bounds = right_case__part_1.getBounds();
                let right_case__part_1_x = right_case__part_1_bounds[0].x + (right_case__part_1_bounds[1].x - right_case__part_1_bounds[0].x) / 2
                let right_case__part_1_y = right_case__part_1_bounds[0].y + (right_case__part_1_bounds[1].y - right_case__part_1_bounds[0].y) / 2
                right_case__part_1 = translate([-right_case__part_1_x, -right_case__part_1_y, 0], right_case__part_1);
                right_case__part_1 = rotate([0,0,0], right_case__part_1);
                right_case__part_1 = translate([right_case__part_1_x, right_case__part_1_y, 0], right_case__part_1);

                right_case__part_1 = translate([0,0,0], right_case__part_1);
                result = result.union(right_case__part_1);
                
            

                // creating part 2 of case right_case
                let right_case__part_2 = _right_mounting_case_fn();

                // make sure that rotations are relative
                let right_case__part_2_bounds = right_case__part_2.getBounds();
                let right_case__part_2_x = right_case__part_2_bounds[0].x + (right_case__part_2_bounds[1].x - right_case__part_2_bounds[0].x) / 2
                let right_case__part_2_y = right_case__part_2_bounds[0].y + (right_case__part_2_bounds[1].y - right_case__part_2_bounds[0].y) / 2
                right_case__part_2 = translate([-right_case__part_2_x, -right_case__part_2_y, 0], right_case__part_2);
                right_case__part_2 = rotate([0,0,0], right_case__part_2);
                right_case__part_2 = translate([right_case__part_2_x, right_case__part_2_y, 0], right_case__part_2);

                right_case__part_2 = translate([0,0,0], right_case__part_2);
                result = result.subtract(right_case__part_2);
                
            

                // creating part 3 of case right_case
                let right_case__part_3 = _xl_right_bottom_case_fn();

                // make sure that rotations are relative
                let right_case__part_3_bounds = right_case__part_3.getBounds();
                let right_case__part_3_x = right_case__part_3_bounds[0].x + (right_case__part_3_bounds[1].x - right_case__part_3_bounds[0].x) / 2
                let right_case__part_3_y = right_case__part_3_bounds[0].y + (right_case__part_3_bounds[1].y - right_case__part_3_bounds[0].y) / 2
                right_case__part_3 = translate([-right_case__part_3_x, -right_case__part_3_y, 0], right_case__part_3);
                right_case__part_3 = rotate([0,0,0], right_case__part_3);
                right_case__part_3 = translate([right_case__part_3_x, right_case__part_3_y, 0], right_case__part_3);

                right_case__part_3 = translate([0,0,0], right_case__part_3);
                result = result.union(right_case__part_3);
                
            

                // creating part 4 of case right_case
                let right_case__part_4 = _right_next_to_wall_standoff_case_fn();

                // make sure that rotations are relative
                let right_case__part_4_bounds = right_case__part_4.getBounds();
                let right_case__part_4_x = right_case__part_4_bounds[0].x + (right_case__part_4_bounds[1].x - right_case__part_4_bounds[0].x) / 2
                let right_case__part_4_y = right_case__part_4_bounds[0].y + (right_case__part_4_bounds[1].y - right_case__part_4_bounds[0].y) / 2
                right_case__part_4 = translate([-right_case__part_4_x, -right_case__part_4_y, 0], right_case__part_4);
                right_case__part_4 = rotate([0,0,0], right_case__part_4);
                right_case__part_4 = translate([right_case__part_4_x, right_case__part_4_y, 0], right_case__part_4);

                right_case__part_4 = translate([0,0,0], right_case__part_4);
                result = result.union(right_case__part_4);
                
            
                    return result;
                }
            
            
        
            function main() {
                return right_case_case_fn();
            }

        