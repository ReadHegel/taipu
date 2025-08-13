function xl_board_right_extrude_5_5_outline_fn(){
    return new CSG.Path2D([[298.3737495,-152.3688562],[244.1337187,-169.7083391]]).appendArc([240.6221434,-168.3508018],{"radius":3,"clockwise":true,"large":false}).appendPoint([228.7328607,-147.75796]).appendArc([228.3309369,-146.25796],{"radius":3,"clockwise":true,"large":false}).appendPoint([228.3309369,-81.7257258]).appendArc([230.976162,-78.7467772],{"radius":3,"clockwise":true,"large":false}).appendPoint([289.580258,-71.767383]).appendArc([289.9350329,-71.7463316],{"radius":3,"clockwise":true,"large":false}).appendPoint([316.5496829,-71.7463316]).appendArc([316.9623881,-71.7748548],{"radius":3,"clockwise":true,"large":false}).appendPoint([334.6380321,-74.2298054]).appendArc([334.874307,-74.2723191],{"radius":3,"clockwise":true,"large":false}).appendPoint([394.1515062,-87.4065657]).appendArc([396.4733303,-90.7530481],{"radius":3,"clockwise":true,"large":false}).appendPoint([388.7173254,-145.9398908]).appendArc([385.8747373,-148.5196304],{"radius":3,"clockwise":true,"large":false}).appendPoint([299.1590325,-152.2291345]).appendArc([298.3737495,-152.3688561],{"radius":3,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 5.5] });
}


function board_right_extrude_5_5_outline_fn(){
    return new CSG.Path2D([[296.3747465,-149.869439],[244.6192301,-166.5367302]]).appendArc([241.1015468,-165.1811527],{"radius":3,"clockwise":true,"large":false}).appendPoint([231.7149116,-148.9230236]).appendArc([231.3129878,-147.4230236],{"radius":3,"clockwise":true,"large":false}).appendPoint([231.3129878,-84.8568112]).appendArc([233.9203001,-81.8826228],{"radius":3,"clockwise":true,"large":false}).appendPoint([291.5615258,-74.2721432]).appendArc([291.9542135,-74.2463316],{"radius":3,"clockwise":true,"large":false}).appendPoint([314.5496829,-74.2463316]).appendArc([314.9623881,-74.2748548],{"radius":3,"clockwise":true,"large":false}).appendPoint([332.6433152,-76.7305391]).appendArc([332.8691876,-76.7707672],{"radius":3,"clockwise":true,"large":false}).appendPoint([391.8112579,-89.6114009]).appendArc([394.1434845,-92.9601688],{"radius":3,"clockwise":true,"large":false}).appendPoint([387.0837888,-143.192514]).appendArc([384.2491225,-145.7719043],{"radius":3,"clockwise":true,"large":false}).appendPoint([297.1582157,-149.728107]).appendArc([296.3747465,-149.869439],{"radius":3,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 5.5] });
}


function right_mounting_standoff_extrude_4_outline_fn(){
    return CAG.circle({"center":[257.1165085,-151.9198802],"radius":2.5})
.union(
    CAG.circle({"center":[367.2577893,-136.963252],"radius":2.5})
).union(
    CAG.circle({"center":[294.257021,-108.1963316],"radius":2.5})
).union(
    CAG.circle({"center":[258.257021,-95.3463316],"radius":2.5})
).union(
    CAG.circle({"center":[371.9896747,-103.2941376],"radius":2.5})
).extrude({ offset: [0, 0, 4] });
}


function right_mounting_extrude_4_outline_fn(){
    return CAG.circle({"center":[257.1165085,-151.9198802],"radius":1.35})
.union(
    CAG.circle({"center":[367.2577893,-136.963252],"radius":1.35})
).union(
    CAG.circle({"center":[294.257021,-108.1963316],"radius":1.35})
).union(
    CAG.circle({"center":[258.257021,-95.3463316],"radius":1.35})
).union(
    CAG.circle({"center":[371.9896747,-103.2941376],"radius":1.35})
).extrude({ offset: [0, 0, 4] });
}


function xl_board_right_extrude_1_outline_fn(){
    return new CSG.Path2D([[298.3737495,-152.3688562],[244.1337187,-169.7083391]]).appendArc([240.6221434,-168.3508018],{"radius":3,"clockwise":true,"large":false}).appendPoint([228.7328607,-147.75796]).appendArc([228.3309369,-146.25796],{"radius":3,"clockwise":true,"large":false}).appendPoint([228.3309369,-81.7257258]).appendArc([230.976162,-78.7467772],{"radius":3,"clockwise":true,"large":false}).appendPoint([289.580258,-71.767383]).appendArc([289.9350329,-71.7463316],{"radius":3,"clockwise":true,"large":false}).appendPoint([316.5496829,-71.7463316]).appendArc([316.9623881,-71.7748548],{"radius":3,"clockwise":true,"large":false}).appendPoint([334.6380321,-74.2298054]).appendArc([334.874307,-74.2723191],{"radius":3,"clockwise":true,"large":false}).appendPoint([394.1515062,-87.4065657]).appendArc([396.4733303,-90.7530481],{"radius":3,"clockwise":true,"large":false}).appendPoint([388.7173254,-145.9398908]).appendArc([385.8747373,-148.5196304],{"radius":3,"clockwise":true,"large":false}).appendPoint([299.1590325,-152.2291345]).appendArc([298.3737495,-152.3688561],{"radius":3,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}




                function _right_wall_case_fn() {
                    

                // creating part 0 of case _right_wall
                let _right_wall__part_0 = _right_outer_wall_case_fn();

                // make sure that rotations are relative
                let _right_wall__part_0_bounds = _right_wall__part_0.getBounds();
                let _right_wall__part_0_x = _right_wall__part_0_bounds[0].x + (_right_wall__part_0_bounds[1].x - _right_wall__part_0_bounds[0].x) / 2
                let _right_wall__part_0_y = _right_wall__part_0_bounds[0].y + (_right_wall__part_0_bounds[1].y - _right_wall__part_0_bounds[0].y) / 2
                _right_wall__part_0 = translate([-_right_wall__part_0_x, -_right_wall__part_0_y, 0], _right_wall__part_0);
                _right_wall__part_0 = rotate([0,0,0], _right_wall__part_0);
                _right_wall__part_0 = translate([_right_wall__part_0_x, _right_wall__part_0_y, 0], _right_wall__part_0);

                _right_wall__part_0 = translate([0,0,0], _right_wall__part_0);
                let result = _right_wall__part_0;
                
            

                // creating part 1 of case _right_wall
                let _right_wall__part_1 = _right_inner_wall_case_fn();

                // make sure that rotations are relative
                let _right_wall__part_1_bounds = _right_wall__part_1.getBounds();
                let _right_wall__part_1_x = _right_wall__part_1_bounds[0].x + (_right_wall__part_1_bounds[1].x - _right_wall__part_1_bounds[0].x) / 2
                let _right_wall__part_1_y = _right_wall__part_1_bounds[0].y + (_right_wall__part_1_bounds[1].y - _right_wall__part_1_bounds[0].y) / 2
                _right_wall__part_1 = translate([-_right_wall__part_1_x, -_right_wall__part_1_y, 0], _right_wall__part_1);
                _right_wall__part_1 = rotate([0,0,0], _right_wall__part_1);
                _right_wall__part_1 = translate([_right_wall__part_1_x, _right_wall__part_1_y, 0], _right_wall__part_1);

                _right_wall__part_1 = translate([0,0,0], _right_wall__part_1);
                result = result.subtract(_right_wall__part_1);
                
            
                    return result;
                }
            
            

                function _right_outer_wall_case_fn() {
                    

                // creating part 0 of case _right_outer_wall
                let _right_outer_wall__part_0 = xl_board_right_extrude_5_5_outline_fn();

                // make sure that rotations are relative
                let _right_outer_wall__part_0_bounds = _right_outer_wall__part_0.getBounds();
                let _right_outer_wall__part_0_x = _right_outer_wall__part_0_bounds[0].x + (_right_outer_wall__part_0_bounds[1].x - _right_outer_wall__part_0_bounds[0].x) / 2
                let _right_outer_wall__part_0_y = _right_outer_wall__part_0_bounds[0].y + (_right_outer_wall__part_0_bounds[1].y - _right_outer_wall__part_0_bounds[0].y) / 2
                _right_outer_wall__part_0 = translate([-_right_outer_wall__part_0_x, -_right_outer_wall__part_0_y, 0], _right_outer_wall__part_0);
                _right_outer_wall__part_0 = rotate([0,0,0], _right_outer_wall__part_0);
                _right_outer_wall__part_0 = translate([_right_outer_wall__part_0_x, _right_outer_wall__part_0_y, 0], _right_outer_wall__part_0);

                _right_outer_wall__part_0 = translate([0,0,0], _right_outer_wall__part_0);
                let result = _right_outer_wall__part_0;
                
            
                    return result;
                }
            
            

                function _right_inner_wall_case_fn() {
                    

                // creating part 0 of case _right_inner_wall
                let _right_inner_wall__part_0 = board_right_extrude_5_5_outline_fn();

                // make sure that rotations are relative
                let _right_inner_wall__part_0_bounds = _right_inner_wall__part_0.getBounds();
                let _right_inner_wall__part_0_x = _right_inner_wall__part_0_bounds[0].x + (_right_inner_wall__part_0_bounds[1].x - _right_inner_wall__part_0_bounds[0].x) / 2
                let _right_inner_wall__part_0_y = _right_inner_wall__part_0_bounds[0].y + (_right_inner_wall__part_0_bounds[1].y - _right_inner_wall__part_0_bounds[0].y) / 2
                _right_inner_wall__part_0 = translate([-_right_inner_wall__part_0_x, -_right_inner_wall__part_0_y, 0], _right_inner_wall__part_0);
                _right_inner_wall__part_0 = rotate([0,0,0], _right_inner_wall__part_0);
                _right_inner_wall__part_0 = translate([_right_inner_wall__part_0_x, _right_inner_wall__part_0_y, 0], _right_inner_wall__part_0);

                _right_inner_wall__part_0 = translate([0,0,0], _right_inner_wall__part_0);
                let result = _right_inner_wall__part_0;
                
            
                    return result;
                }
            
            

                function _right_standoff_case_fn() {
                    

                // creating part 0 of case _right_standoff
                let _right_standoff__part_0 = right_mounting_standoff_extrude_4_outline_fn();

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
                let _right_mounting__part_0 = right_mounting_extrude_4_outline_fn();

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
                let _xl_right_bottom__part_0 = xl_board_right_extrude_1_outline_fn();

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
                
            
                    return result;
                }
            
            
        
            function main() {
                return right_case_case_fn();
            }

        