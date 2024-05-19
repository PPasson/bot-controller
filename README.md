# Bot Controller

Bot Controller is a command-line application that simulates the movement of a robot in a 2-dimensional plane. The robot can turn left or right and walk straight, following a series of commands provided as a string.

## Prerequisites

- Node.js
- npm (Node Package Manager)
- TypeScript

## Installation

1. Clone the repository or download the source code.

    ```sh
    git clone https://github.com/PPasson/bot-controller.git
    cd bot-controller
    ```

2. Install dependencies.

    ```sh
    npm install
    ```

3. Compile the TypeScript code.

    ```sh
    npx tsc bot-controller.ts
    ```

## Usage

To run the Bot Controller application, provide a command string as an argument. The command string consists of the letters `R`, `L`, and `W` followed by a number, representing the actions for the robot to perform:

- `R`: Turn 90 degrees to the right (clockwise).
- `L`: Turn 90 degrees to the left (counterclockwise).
- `W<N>`: Walk straight for `<N>` points, where `<N>` is a positive integer.

### Example

Run the application with a command string:

```sh
node bot-controller.js RW15RW1
```