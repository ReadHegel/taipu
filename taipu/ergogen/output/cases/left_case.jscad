function xl_board_left_extrude_5_5_outline_fn(){
    return new CSG.Path2D([[146.4252929,-152.4599652],[200.3803233,-169.7083391]]).appendArc([203.8918986,-168.3508018],{"radius":3,"clockwise":false,"large":false}).appendPoint([215.7811813,-147.75796]).appendArc([216.1831051,-146.25796],{"radius":3,"clockwise":false,"large":false}).appendPoint([216.1831051,-81.7257258]).appendArc([213.53788,-78.7467772],{"radius":3,"clockwise":false,"large":false}).appendPoint([154.933784,-71.767383]).appendArc([154.5790091,-71.7463316],{"radius":3,"clockwise":false,"large":false}).appendPoint([127.9643591,-71.7463316]).appendArc([127.5516539,-71.7748548],{"radius":3,"clockwise":false,"large":false}).appendPoint([109.9219834,-74.2234201]).appendArc([109.5956086,-74.2873617],{"radius":3,"clockwise":false,"large":false}).appendPoint([68.0854752,-84.839016]).appendArc([65.8537509,-88.1640705],{"radius":3,"clockwise":false,"large":false}).appendPoint([75.9131468,-159.7403917]).appendArc([79.3324285,-162.289161],{"radius":3,"clockwise":false,"large":false}).appendPoint([145.0633162,-152.3512139]).appendArc([146.4252928,-152.4599652],{"radius":3,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 5.5] });
}


function board_left_extrude_5_5_outline_fn(){
    return new CSG.Path2D([[148.4215207,-149.9603265],[199.8948119,-166.5367302]]).appendArc([203.4124952,-165.1811527],{"radius":3,"clockwise":false,"large":false}).appendPoint([212.7991304,-148.9230236]).appendArc([213.2010542,-147.4230236],{"radius":3,"clockwise":false,"large":false}).appendPoint([213.2010542,-84.8568112]).appendArc([210.5937419,-81.8826228],{"radius":3,"clockwise":false,"large":false}).appendPoint([152.9525162,-74.2721432]).appendArc([152.5598285,-74.2463316],{"radius":3,"clockwise":false,"large":false}).appendPoint([129.9643591,-74.2463316]).appendArc([129.5516539,-74.2748548],{"radius":3,"clockwise":false,"large":false}).appendPoint([111.9149946,-76.7243908]).appendArc([111.6022644,-76.7848981],{"radius":3,"clockwise":false,"large":false}).appendPoint([70.429358,-87.045495]).appendArc([68.1839892,-90.3739838],{"radius":3,"clockwise":false,"large":false}).appendPoint([77.547577,-156.9993741]).appendArc([80.9539827,-159.5500616],{"radius":3,"clockwise":false,"large":false}).appendPoint([147.0663121,-149.8476972]).appendArc([148.4215207,-149.9603265],{"radius":3,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 5.5] });
}


function left_mounting_standoff_extrude_4_outline_fn(){
    return CAG.circle({"center":[187.3975335,-151.9198802],"radius":2.5})
.union(
    CAG.circle({"center":[97.4470206,-151.2926934],"radius":2.5})
).union(
    CAG.circle({"center":[150.257021,-108.1963316],"radius":2.5})
).union(
    CAG.circle({"center":[186.257021,-95.3463316],"radius":2.5})
).union(
    CAG.circle({"center":[90.3491925,-100.7890218],"radius":2.5})
).extrude({ offset: [0, 0, 4] });
}


function left_mounting_extrude_4_outline_fn(){
    return CAG.circle({"center":[187.3975335,-151.9198802],"radius":1.5})
.union(
    CAG.circle({"center":[97.4470206,-151.2926934],"radius":1.5})
).union(
    CAG.circle({"center":[150.257021,-108.1963316],"radius":1.5})
).union(
    CAG.circle({"center":[186.257021,-95.3463316],"radius":1.5})
).union(
    CAG.circle({"center":[90.3491925,-100.7890218],"radius":1.5})
).extrude({ offset: [0, 0, 4] });
}


function xl_board_left_extrude_1_outline_fn(){
    return new CSG.Path2D([[146.4252929,-152.4599652],[200.3803233,-169.7083391]]).appendArc([203.8918986,-168.3508018],{"radius":3,"clockwise":false,"large":false}).appendPoint([215.7811813,-147.75796]).appendArc([216.1831051,-146.25796],{"radius":3,"clockwise":false,"large":false}).appendPoint([216.1831051,-81.7257258]).appendArc([213.53788,-78.7467772],{"radius":3,"clockwise":false,"large":false}).appendPoint([154.933784,-71.767383]).appendArc([154.5790091,-71.7463316],{"radius":3,"clockwise":false,"large":false}).appendPoint([127.9643591,-71.7463316]).appendArc([127.5516539,-71.7748548],{"radius":3,"clockwise":false,"large":false}).appendPoint([109.9219834,-74.2234201]).appendArc([109.5956086,-74.2873617],{"radius":3,"clockwise":false,"large":false}).appendPoint([68.0854752,-84.839016]).appendArc([65.8537509,-88.1640705],{"radius":3,"clockwise":false,"large":false}).appendPoint([75.9131468,-159.7403917]).appendArc([79.3324285,-162.289161],{"radius":3,"clockwise":false,"large":false}).appendPoint([145.0633162,-152.3512139]).appendArc([146.4252928,-152.4599652],{"radius":3,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}




                function _left_wall_case_fn() {
                    

                // creating part 0 of case _left_wall
                let _left_wall__part_0 = _left_outer_wall_case_fn();

                // make sure that rotations are relative
                let _left_wall__part_0_bounds = _left_wall__part_0.getBounds();
                let _left_wall__part_0_x = _left_wall__part_0_bounds[0].x + (_left_wall__part_0_bounds[1].x - _left_wall__part_0_bounds[0].x) / 2
                let _left_wall__part_0_y = _left_wall__part_0_bounds[0].y + (_left_wall__part_0_bounds[1].y - _left_wall__part_0_bounds[0].y) / 2
                _left_wall__part_0 = translate([-_left_wall__part_0_x, -_left_wall__part_0_y, 0], _left_wall__part_0);
                _left_wall__part_0 = rotate([0,0,0], _left_wall__part_0);
                _left_wall__part_0 = translate([_left_wall__part_0_x, _left_wall__part_0_y, 0], _left_wall__part_0);

                _left_wall__part_0 = translate([0,0,0], _left_wall__part_0);
                let result = _left_wall__part_0;
                
            

                // creating part 1 of case _left_wall
                let _left_wall__part_1 = _left_inner_wall_case_fn();

                // make sure that rotations are relative
                let _left_wall__part_1_bounds = _left_wall__part_1.getBounds();
                let _left_wall__part_1_x = _left_wall__part_1_bounds[0].x + (_left_wall__part_1_bounds[1].x - _left_wall__part_1_bounds[0].x) / 2
                let _left_wall__part_1_y = _left_wall__part_1_bounds[0].y + (_left_wall__part_1_bounds[1].y - _left_wall__part_1_bounds[0].y) / 2
                _left_wall__part_1 = translate([-_left_wall__part_1_x, -_left_wall__part_1_y, 0], _left_wall__part_1);
                _left_wall__part_1 = rotate([0,0,0], _left_wall__part_1);
                _left_wall__part_1 = translate([_left_wall__part_1_x, _left_wall__part_1_y, 0], _left_wall__part_1);

                _left_wall__part_1 = translate([0,0,0], _left_wall__part_1);
                result = result.subtract(_left_wall__part_1);
                
            
                    return result;
                }
            
            

                function _left_outer_wall_case_fn() {
                    

                // creating part 0 of case _left_outer_wall
                let _left_outer_wall__part_0 = xl_board_left_extrude_5_5_outline_fn();

                // make sure that rotations are relative
                let _left_outer_wall__part_0_bounds = _left_outer_wall__part_0.getBounds();
                let _left_outer_wall__part_0_x = _left_outer_wall__part_0_bounds[0].x + (_left_outer_wall__part_0_bounds[1].x - _left_outer_wall__part_0_bounds[0].x) / 2
                let _left_outer_wall__part_0_y = _left_outer_wall__part_0_bounds[0].y + (_left_outer_wall__part_0_bounds[1].y - _left_outer_wall__part_0_bounds[0].y) / 2
                _left_outer_wall__part_0 = translate([-_left_outer_wall__part_0_x, -_left_outer_wall__part_0_y, 0], _left_outer_wall__part_0);
                _left_outer_wall__part_0 = rotate([0,0,0], _left_outer_wall__part_0);
                _left_outer_wall__part_0 = translate([_left_outer_wall__part_0_x, _left_outer_wall__part_0_y, 0], _left_outer_wall__part_0);

                _left_outer_wall__part_0 = translate([0,0,0], _left_outer_wall__part_0);
                let result = _left_outer_wall__part_0;
                
            
                    return result;
                }
            
            

                function _left_inner_wall_case_fn() {
                    

                // creating part 0 of case _left_inner_wall
                let _left_inner_wall__part_0 = board_left_extrude_5_5_outline_fn();

                // make sure that rotations are relative
                let _left_inner_wall__part_0_bounds = _left_inner_wall__part_0.getBounds();
                let _left_inner_wall__part_0_x = _left_inner_wall__part_0_bounds[0].x + (_left_inner_wall__part_0_bounds[1].x - _left_inner_wall__part_0_bounds[0].x) / 2
                let _left_inner_wall__part_0_y = _left_inner_wall__part_0_bounds[0].y + (_left_inner_wall__part_0_bounds[1].y - _left_inner_wall__part_0_bounds[0].y) / 2
                _left_inner_wall__part_0 = translate([-_left_inner_wall__part_0_x, -_left_inner_wall__part_0_y, 0], _left_inner_wall__part_0);
                _left_inner_wall__part_0 = rotate([0,0,0], _left_inner_wall__part_0);
                _left_inner_wall__part_0 = translate([_left_inner_wall__part_0_x, _left_inner_wall__part_0_y, 0], _left_inner_wall__part_0);

                _left_inner_wall__part_0 = translate([0,0,0], _left_inner_wall__part_0);
                let result = _left_inner_wall__part_0;
                
            
                    return result;
                }
            
            

                function _left_standoff_case_fn() {
                    

                // creating part 0 of case _left_standoff
                let _left_standoff__part_0 = left_mounting_standoff_extrude_4_outline_fn();

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
                let _left_mounting__part_0 = left_mounting_extrude_4_outline_fn();

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
                let _xl_left_bottom__part_0 = xl_board_left_extrude_1_outline_fn();

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
                
            
                    return result;
                }
            
            
        
            function main() {
                return left_case_case_fn();
            }

        