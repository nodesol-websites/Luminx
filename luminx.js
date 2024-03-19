
  const container = document.getElementById('container');
        const canvas = document.getElementById('canvas');
        const result = document.getElementById('result');
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;
        const centerX = width / 2;
        const centerY = height / 2;
        const radius = 80;
        const lineWidth = 10;
        let angle = 1; // Initial angle set to 1 to prevent immediate animation
        let increasing = false;
        let speed = 1; // Adjusted speed for a slower animation

        function drawCircularBar() {
            ctx.clearRect(0, 0, width, height);

            ctx.save(); // Save the current context state


            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, 0, Math.PI * 2, false);
            ctx.strokeStyle = '#060B28';
            ctx.lineWidth = lineWidth;
            ctx.lineCap = 'round'; // Rounded corners
            ctx.stroke();

            // Create a linear gradient for the blue bar
            const gradient = ctx.createLinearGradient(centerX - radius, centerY, centerX + radius, centerY);
            gradient.addColorStop(1, '#0A0E23'); // Start color
            gradient.addColorStop(0, '#0075FF'); // End color

            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, -Math.PI / 2, angle - Math.PI / 2, false);
            ctx.strokeStyle = gradient;
            ctx.lineCap = 'round'; // Rounded corners
            ctx.stroke();

            ctx.restore(); // Restore the context state

            // Display the percentage in the "result" div
            const percentage = Math.floor((angle / (Math.PI * 2)) * 100);
            result.textContent = `${percentage}%`;

            if (increasing) {
                angle += (Math.PI / 180) * speed; // Increase angle for animation with speed
                if (angle >= Math.PI * 2) { // Complete one round
                    increasing = false;
                }
            } else {
                angle -= (Math.PI / 180) * speed; // Decrease angle for animation with speed
                if (angle <= Math.PI * 1.6) { // Stop at 80% of full circle
                    angle = Math.PI * 1.6;
                }
            }

            requestAnimationFrame(drawCircularBar);
        }

        // Trigger the animation on page load
        drawCircularBar();

        container.addEventListener('mouseenter', () => {
            angle = 0; // Reset the angle to 0
            increasing = true;
            drawCircularBar();
        });

        container.addEventListener('mouseleave', () => {
            increasing = false;
        });


        const customContainer = document.getElementById('container');
        const customCanvas = document.getElementById('customCanvas');
        const customResult = document.getElementById('customResult');
        const customCtx = customCanvas.getContext('2d');
        const customWidth = customCanvas.width;
        const customHeight = customCanvas.height;
        const customCenterX = customWidth / 2;
        const customCenterY = customHeight / 2;
        const customRadius = 80; // Adjusted radius based on the canvas size
        const customLineWidth = 10; // Adjusted line width based on the canvas size
        let customAngle = 1; // Initial angle set to 1 to prevent immediate animation
        let customIncreasing = false;
        let customSpeed = 1; // Adjusted speed for a slower animation

        function drawCustomCircularBar() {
            customCtx.clearRect(0, 0, customWidth, customHeight);

            customCtx.save(); // Save the current context state

            customCtx.beginPath();
            // customCtx.arc(customCenterX, customCenterY, customRadius, 0, Math.PI * 2, false);
            // customCtx.strokeStyle =  // Use the gradient for strokeStyle
            customCtx.lineWidth = customLineWidth;
            customCtx.lineCap = 'round'; // Rounded corners
            customCtx.stroke();

            // Create a linear gradient for the blue bar
            const customGradient = customCtx.createLinearGradient(customCenterX - customRadius, customCenterY, customCenterX + customRadius, customCenterY);
            customGradient.addColorStop(1, '#060B28'); // Start color
            customGradient.addColorStop(0, '#05CD99'); // End color

            customCtx.beginPath();
            customCtx.arc(customCenterX, customCenterY, customRadius, -Math.PI / 8, customAngle - Math.PI / 2, false);
            customCtx.strokeStyle = customGradient; 
            customCtx.lineCap = 'round';
            customCtx.stroke();

            customCtx.restore(); // Restore the context state

            // Display the percentage in the "customResult" div
            const customPercentage = Math.floor((customAngle / (Math.PI * 2)) * 100);
            customResult.textContent = `${customPercentage}%`;

            if (customIncreasing) {
                customAngle += (Math.PI / 180) * customSpeed; // Increase angle for animation with speed
                if (customAngle >= Math.PI * 2) { // Complete one round
                    customIncreasing = false;
                }
            } else {
                customAngle -= (Math.PI / 180) * customSpeed; // Decrease angle for animation with speed
                if (customAngle <= Math.PI * 1.5) { // Stop at 80% of full circle
                    customAngle = Math.PI * 1.5;
                }
            }

            requestAnimationFrame(drawCustomCircularBar);
        }

        // Trigger the animation on page load
        drawCustomCircularBar();

        customContainer.addEventListener('mouseenter', () => {
            customAngle = 0; // Reset the angle to 0
            customIncreasing = true;
            drawCustomCircularBar();
        });

        customContainer.addEventListener('mouseleave', () => {
            customIncreasing = false;
        });
